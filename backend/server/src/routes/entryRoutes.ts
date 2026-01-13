import express from 'express'
import {
    getAllEntries,
    getEntryById,
    createEntry,
    updateEntry,
    deleteEntry,
    getWeeklySummary
} from '../controllers/journalController'


const Router = express.Router();

Router.get('/', getAllEntries);
Router.get('/:id', getEntryById);
Router.post('/', createEntry);
Router.put('/:id', updateEntry);
Router.delete('/:id', deleteEntry);



export default Router;