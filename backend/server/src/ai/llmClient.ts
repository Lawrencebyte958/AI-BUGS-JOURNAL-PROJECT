// export async function callLLM(prompt) {
//   // MOCK MODE: this simulates the AI response while we build the app.
//   // Later we will replace this with a real OpenAI request.

//   return "Mock summary: This week you faced some pressure early on, stayed consistent with your tasks, and ended the week feeling more focused and steady.";
// }


import 'dotenv/config';

console.log("LLM KEY LOADED:", !!process.env.OPENAI_API_KEY);

export async function callLLM(prompt: string): Promise<string> {
  // Mock mode (no API calls)
  if (process.env.MOCK_MODE === "true") {
    return (
      "Mock summary: This week you faced some pressure early on, stayed consistent " +
      "with your tasks, and ended the week feeling more focused and steady."
    );
  }

  //  Basic env check
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing in .env");
  }

  // Load OpenAI only when we actually need it
  const { default: OpenAI } = await import("openai");
  const client = new OpenAI({ apiKey });

  // Pick a model (or use the default)
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  //  Make the request
  const response = await client.chat.completions.create({
    model,
    temperature: 0.4,
    messages: [
      {
        role: "system",
        content:
          "Write a short weekly summary based only on the journal entries. " +
          "3–5 sentences, supportive and neutral, no bullet points, no emojis.",
      },
      { role: "user", content: prompt },
    ],
  });

  // Pull the text safely
  const text = response.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new Error("No summary returned from OpenAI.");
  }

  return text;
}
