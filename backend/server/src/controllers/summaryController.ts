import { Request, Response } from "express"; 
import journalEntry from "../models/journalEntry";
import { buildWeeklyPrompt } from "../ai/buildPrompt"
import { callLLM } from "../ai/llmClient";
import { error } from "node:console";

export const getWeeklySummary = async (req: Request, res: Response): Promise<void> => {
    try {
        // calculate the date range for past 7 days
        const endDate = new Date(); 
        const startDate = new Date(); 
        startDate.setDate(startDate.getDate() - 7); 

        // fetch entries from last 7 days 
        const entries = await journalEntry.find({
            createdAt: {
                $gte: startDate, 
                $lte: endDate
            }
        }).sort({createdAt: 1}); 

        if (entries.length === 0 ) {
            res.status(404).json({
                message: 'no Journal entries found for the past week'
            }); 
            return; 
        }

        const prompt = buildWeeklyPrompt(entries); 

        const summary = await callLLM(prompt); 

        res.status(200).json({
            summary, 
            entriesCount: entries.length, 
            dateRange: {
                start: startDate.toISOString(), 
                end: endDate.toISOString()
            }
        });
    } catch (err) {
        console.error("errpr generating weekly summary"); 
        res.status(500).json({
            message: 'failed to generate weekly summary', 
            error: error instanceof Error ? error.message : "unknown error"
        })
    }
}