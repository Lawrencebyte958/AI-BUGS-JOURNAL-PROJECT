import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { journalAPI } from "../services/api";
import JournalList from "../components/JournalList";

const Home = () => {
    const [entries, setEntries] = useState([]); 
    const [isLoading, setIsLoading ] = useState(true); 
    const [error, setError] = useState(null); 
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchEntries(); 
    }, []); 

    const fetchEntries = async () => {
        try {
            setIsLoading(true); 
            const data = await journalAPI.getAllEntries(); 
            setEntries(data); 
        } catch (err) {
            setError('Failed to load entries, is the backend up?'); 
            console.err(err)
        } finally {
            setIsLoading(false); 
        }
    }; 

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delte this entry?')) {
            try {
                await journalAPI.deleteEntry(id); 
                setEntries(entries.filter((entry) => entry.id !== id))
            } catch (err) {
                setError('Failed to delete entry'); 
                console.error(err); 
            }
        }
    }; 

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    };


    return (
        <div className="home-page">
            <h1>My Journal</h1>
            {error && <div className="error-message">{error}</div>}
            <JournalList 
                entries={entries}
                onDelete={handleDelete}
                onEdit={handleEdit}
                isLoading={isLoading}
            />
        </div>
    )
}

export default Home; 