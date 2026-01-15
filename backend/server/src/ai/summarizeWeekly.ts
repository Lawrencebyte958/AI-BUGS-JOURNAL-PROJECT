import { buildWeeklyPrompt } from "./buildPrompt";
import { callLLM } from "./llmClient";


export async function summarizeWeekly(entries: string[]) {
  if (!Array.isArray(entries)) {
    throw new Error("summarizeWeekly expects an array of strings.");
  }

  const cleaned = [];

  for (let i = 0; i < entries.length; i++) {
    if (typeof entries[i] === "string") {
      const text = entries[i].trim();
      if (text !== "") {
        cleaned.push(text);
      }
    }
  }

  if (cleaned.length === 0) {
    return { summary: "No journal entries found for this week." };
  }

  const prompt = buildWeeklyPrompt(cleaned);
  const summary = await callLLM(prompt);

  return { summary };
}
// import { buildWeeklyPrompt } from "./buildPrompt";
// import { callLLM } from "./llmClient";


// export async function summarizeWeekly(entries: string[]) {
//   if (!Array.isArray(entries)) {
//     throw new Error("summarizeWeekly expects an array of strings.");
//   }

//   const cleaned = [];

//   for (let i = 0; i < entries.length; i++) {
//     if (typeof entries[i] === "string") {
//       const text = entries[i].trim();
//       if (text !== "") {
//         cleaned.push(text);
//       }
//     }
//   }

//   if (cleaned.length === 0) {
//     return { summary: "No journal entries found for this week." };
//   }

//   const prompt = buildWeeklyPrompt(cleaned);
//   const summary = await callLLM(prompt);

//   return { summary };
// }
