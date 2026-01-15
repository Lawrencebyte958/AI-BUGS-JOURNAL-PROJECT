import { useState, useEffect} from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { journalAPI } from "../services/api";
import JournalForm from "../components/JournalForm";

const EditEntry = () => {
    // grabbing id from URL
    const { id } = useParams(); 
    const navigate = useNavigate(); 

    // init flag variables
    const [entry, setEntry] = useState(null); 
    const [isLoading, setIsLoading] = useState(true); 
    const [isSaving, setIsSaving] = useState(false); 
    const [error, setError] = useState(null); 

    // fetch existing entries on component mount
    useEffect(() => {
        const fetchEntry = async () => {
            try {
                setIsLoading(true); 
                const data = await journalAPI.getEntryById(id); 
                setEntry(data); 
            } catch (err) {
                setError("failed to load entry"); 
                console.error(err); 
            } finally {
                setIsLoading(false); 
            }
        }; 

        fetchEntry(); 
    },[id]); 

    const handleSubmit = async (formData) => {
        try {
            setIsSaving(true); 
            setError(null); 
            await journalAPI.updateEntry(id, formData); 
            navigate("/"); 
        } catch (err) {
            setError("failed to update entry. please try again"); 
            console.error(err); 
        } finally {
            setIsSaving(false); 
        }
    };

    if(isLoading) {
        return <p>Loading entry...</p>
    }

    if (error && !entry) {
        return <p className="error-message">{error}</p>
    }

     return (
            <div className="edit-entry-page">
                <h1>Edit Journal Entry</h1>

                {error && <div className="error-message">{error}</div>}

                <JournalForm 
                    onSubmit={handleSubmit}
                    data={entry}
                    isLoading={isSaving}
                />
            </div>
        )
}; 

export default EditEntry; 