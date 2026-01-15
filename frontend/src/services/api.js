import axios from "axios"; 

const API_BASE_URL = "http://localhost:3000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type" : "application/json"
    },
});

export const journalAPI = {
    getAllEntries: async () => {
        try { 
        	const res = await api.get('/entries')
        	return res.data; 
        } catch (err) {
					console.error('error fetching entries', err)
					throw err
        }
        
    }, 

    getEntryById: async (id) => {
			try {
				const res = await api.get(`/entries/${id}`)
        return res.data; 
			} catch (err) {
				console.error('error fetching entry by id', err)
				throw err
			}
    }, 

    createEntry: async (entry) => {
			try {
				const res = await api.post('/entries', entry); 
        return res.data; 
			} catch (err) {
				console.error('error creating entry', err)
				throw err
			}
    }, 

    updateEntry: async (id, entry) => {
			try {
				const res = await api.put(`/entries/${id}`, entry); 
        return res.data; 
			} catch (err) {
				console.error('error updating entry', err); 
				throw err;
			}
    },

    deleteEntry: async (id) => {
			try {
        await api.delete(`/entries/${id}`); 
			} catch (err) {
				console.error('error deleting entry', err); 
				throw err; 
			}
    }, 

    getWeeklySummary: async () => {
			try {
        const res = await api.get('/summary/weekly'); 
        return res.data;
			} catch (err) {
				console.error('error fetching weekly summary', err); 
				throw err
			}
    }
}

export default api 