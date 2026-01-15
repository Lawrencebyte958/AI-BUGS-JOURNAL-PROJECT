import {Link} from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JournalEntry = () => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/JournalList", {
      state: { title, entry }
    });
  };

  return (
    <nav className="journal-entry">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <textarea
          id="user_title_entry"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Entry</label>
        <textarea
          id="user_entry"
          rows="8"
          cols="50"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </nav>
  );
};

export default JournalEntry;

//   const navigate = useNavigate();
// return journalEntry(

//     <nav className="Journal page">
//         <form method="GET">
//         <textarea id="user_title_entry" name='Entry'>
//             <label>
//             </label>
//             </textarea>
//         <textarea id="user_entry" name='entry' rows="8" cols="50"></textarea>
//         </form>
//         <input type="submit" value="Submit"></input>
//     </nav>
// )
// }
//note for later, make it automatically add the current date to the side of a journel entrys name and size it appropriately