import { useState } from "react"; 

const JournalForm = ({onSubmit, data, isLoading}) => {
    const [title, setTitle] = useState(data?.title || ""); 
    const [content, setContent] = useState(data?.content || ""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit({title, content})
    }

    return (
        <form className="journal-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give A Title for Entry... "
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="content">whats on your mind?</label>
                <textarea 
									id="content"
									value={content}
									onChange={(e) => setContent(e.target.value)}
									placeholder="write your thoughts here..."
									rows={10}
									required
                />
            </div>

						<button type="submit" disabled={isLoading}>
							{isLoading ? 'Saving...': 'Save Entry'}
						</button>
        </form>
    )
} 

export default JournalForm; 
