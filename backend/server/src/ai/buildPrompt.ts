// Create a prompt from weekly journal entries

export function buildWeeklyPrompt(entries: string[]) {

  const intro = `
Write a short weekly summary based only on the journal entries below.
Rules:
- 3 to 5 sentences max.
- Supportive, neutral tone.
- Do not invent details that are not mentioned.
- No bullet points.
- No emojis.
-Avoid generic advice. Keep it specific to the entries.

Journal entries:
`;

  let numbered: string[] = [];

  for (let i = 0; i < entries.length; i++) {
    numbered.push(`${i + 1}) ${entries[i]}`);
  }

  const body = numbered.join("\n");

  return intro + body;
}