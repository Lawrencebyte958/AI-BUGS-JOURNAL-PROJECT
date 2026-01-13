import express from "express"; 
import { getWeeklySummary } from "../controllers/journalController";

const Router = express.Router(); 

Router.get("/weekly", getWeeklySummary);

export default Router;