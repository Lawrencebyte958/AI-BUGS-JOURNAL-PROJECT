//container of overarching journal entries made
import {Link} from 'react-router-dom'
// import { useLocation } from "react-router-dom";

// const JournalList = ({ entries, onDelete, onEdit, isLoading}) => {
//   const location = useLocation();
//   const { title, entry } = location.state || {};

//   return (
//     <div>
//       <h1>Journal Entries</h1>

//       {title && entry ? (
//         <div className="journal-list">
//           <h2>{title}</h2>
//           <p>{entry}</p>
//         </div>
//       ) : (
//         <p>No journal entries yet.</p>
//       )}
//     </div>
//   );
// };

const JournalList2 = ({ entries, onDelete, onEdit, isLoading}) => {
    if (isLoading) {
        return <p className='loading-message'> Loading Entries...</p>
    }; 

    if (!entries || entries.length === 0) {
        return <p className='empty-message'>No Journal Entries yet. Create some!</p>
    }; 

    return (
        <div className='journal-list'>
            {entries.map((entry) => (
                <div key={entry._id} className='journal-entry'>
                    <h2>{entry.title}</h2>
                    <p>{entry.content || entry.entry}</p>
                    <div className='journal-entry-actions'>
                        <button onClick={() => onEdit(entry._id)}>EDIT</button>
                        <button onClick={() => onDelete(entry._id)} style={{ background: 'var(--error-color'}}>
                            DELETE
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JournalList2;