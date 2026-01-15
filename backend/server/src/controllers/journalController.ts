import { Request, Response } from 'express';
import JournalEntry from '../models/journalEntry';
import { summarizeWeekly } from '../ai/summarizeWeekly';


export const getAllEntries = async (req: Request, res: Response): Promise<void> => {
    try {
        const entries = await JournalEntry.find().sort({ createdAt: -1 });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching entries', error });
    }
};
export const getEntryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const entry = await JournalEntry.findById(req.params.id);
        
        if (!entry) {
            res.status(404).json({ message: 'Entry not found' });
            return;
        }

        res.json(entry)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching entries', error });
    }
};


export const createEntry = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, content, userId } = req.body;
        
        const newEntry = new JournalEntry ({
            title, 
            content,
            userId
        });

        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(400).json({  message: 'Error creating entry', error});
    }
};

export const updateEntry = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, content } = req.body;

        const updatedEntry = await JournalEntry.findByIdAndUpdate(
            req.params.id,
            { title, content },
            {  new: true, runValidators: true }
        );

        if (!updatedEntry) {
            res.status(404).json({ message: 'Entry not found' });
            return;
        }
        res.json(updatedEntry);
    } catch (error) {
        res.status(400).json({ message: 'Error updating entry', error});
    }
};


export const deleteEntry = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedEntry = await JournalEntry.findByIdAndDelete(req.params.id);

        if (!deletedEntry) {
            res.status(404).json({ message: 'Entry not found'});
            return;
        }
        res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting entry', error});
    }
};



export const getWeeklySummary = async (req: Request, res: Response): Promise<void> => {
    try {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const entries = await JournalEntry.find({
            createdAt: { $gte: oneWeekAgo }
        }).sort({ createdAt: 1});

        if (entries.length === 0) {
            res.json({ summary: 'No journal entries found for this week' });
            return;
        }

        // extract the content from entries
        const entryTexts = entries.map(entry =>
            `${entry.title}: ${entry.content}`
        );


        // call AI summarization
        const result = await summarizeWeekly(entryTexts);
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error generating summary', error });
    }
};



