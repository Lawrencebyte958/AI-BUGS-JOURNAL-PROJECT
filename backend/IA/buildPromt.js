//Create a prompt from weekly journal entries

export function buildWeeklyPrompt(entries) {
    const intro = `
    write a short weekly summary based only on the jornal entries below.
    Rules:
    - 3 to 5 sentences max.
    -Supportive, neutral tone.
    -Do not invent details that are no mentioned.
    -No bullet points.
    -No emojis.

    Journal entries:

    `;

    let numbered = [];

    for (let i= 0; i<entries.length; i++) {
        numbered.push(`${i + 1}) ${entries[i]}`);    
    }
    const body = numbered.join("\n")
    return intro + body;
    //const body = entries.map((text, i ) => `${i +1}`)
}