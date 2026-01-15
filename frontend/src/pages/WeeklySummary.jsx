
import { useEffect, useState } from "react"
import {journalAPI} from "../services/api"

const WeeklySummaries = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeeklySummary = async () => {
    setLoading(true);
    setError("");
    setSummary("");
     try {
      const data = await journalAPI.getWeeklySummary();
      setSummary(data.summary);
} catch (err) {
      console.error(err);
      setError("Failed to fetch weekly summary.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeeklySummary();
  }, []);

return (
    <div>
        <h1>Weekly Summaries</h1>
      {loading && <p>Loading summary…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
        {summary && (
        <div className="summary-output">
          <p>{summary}</p>
        </div>
       )}
        <button onClick={fetchWeeklySummary} disabled={loading}>
            {loading ? "summarizing...": "Generate Summary"}
            </button>
    </div>
);
}
export default WeeklySummaries





//     const [summary, setSummary] = useState("");
//     const [loading, setLoading] = useState(false);
//     const handleSummarize = async() => {
//         setLoading(true);

// //         const prompt = entries
// //         .map(
// //             (e, i) => `Entry ${i + 1}
// //             Title: ${e.title}
// //             Text: ${e.entry}`
// // )
//         .join("\n\n");

//         try{
//             const result = await summarizeEntries(prompt);
//             setSummary(result);
//         } catch {
//             setSummary("failedtogeneratesummary")
//         } finally {
//             setLoading(false);
//         }
//     }


// if (entries.length === 0){
//     return <p>No entries provided for Summary.</p>
// }

// return (
//     <div>
//         <h1>Weekly Summaries</h1>
//         <button onClick={handleSummarize} disabled={loading}>
//             {loading ? "summarizing...": "Generate Summary"}
//             </button>
    
//     {
//         summary && (
//             <div className="summary-output">
//              <h2>Summary</h2>
//              <p>{summary}</p>
//             </div>
//         )}
//     </div>
// );
// }
// export default WeeklySummaries;