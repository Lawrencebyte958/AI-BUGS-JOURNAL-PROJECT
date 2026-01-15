const { summarizeWeekly } = require("./summarizeWeekly");

(async () => {
  const entries = [
    "Monday: I felt stressed but I finished my tasks.",
    "Wednesday: I made progress and felt more confident.",
    "Friday: I relaxed and felt calmer."
  ];

  const result = await summarizeWeekly(entries);
  console.log(result);
})();
