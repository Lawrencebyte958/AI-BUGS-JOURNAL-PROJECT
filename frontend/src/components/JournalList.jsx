//container of overarching journal entries made
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

const JournalList = () => {
  const location = useLocation();
  const { title, entry } = location.state || {};

  return (
    <div>
      <h1>Journal Entries</h1>

      {title && entry ? (
        <div className="journal-entry">
          <h2>{title}</h2>
          <p>{entry}</p>
        </div>
      ) : (
        <p>No journal entries yet.</p>
      )}
    </div>
  );
};

export default JournalList;