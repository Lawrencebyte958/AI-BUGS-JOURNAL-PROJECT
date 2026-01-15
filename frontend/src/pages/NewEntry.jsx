import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { journalAPI } from "../services/api"; 
import JournalForm from "../components/JournalForm"; 

const NewEntry = () => {    
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const navigate = useNavigate(); 

    const handleSubmit = async (formData) => {
        try {
            setIsLoading(true); 
            setError(null);

            await journalAPI.createEntry(formData); 

            navigate("/")
        } catch (err) {
            setError("Failed to create entry. Please try again", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="new-entry-page">
            <h1>New Journal Entry</h1>

            {/* Display error message if there is one */}
            {error && <div className="error-message">{error}</div>}

            <JournalForm 
                onSubmit={handleSubmit}
                isLoading={isLoading}
            />
        </div>
    )

}

export default NewEntry; 