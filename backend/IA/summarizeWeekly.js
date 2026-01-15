import { buildWeeklyPrompt } from "./buildPromt.js"
import { callLLM } from "./llmClient.js";

export async function summarizeWeekly(entries) {
    if (!Array.isArray(entries)) {
        throw new Error("summarrizeWeekly expect an array ")
    }
}