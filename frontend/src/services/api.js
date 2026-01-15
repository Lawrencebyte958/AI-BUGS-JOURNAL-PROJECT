import axios from "axios"; 

const API_BASE_URL = "http://localhost:5000/";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type" : "application/json"
    },
});

export const journalAPI = {
    getAllEntries: async () => {
        const res = await api.get('/entries')
        return res.data; 
    }, 

    getEntryById: async (id) => {
        const res = await api.get(`/entries/${id}`)
        return res.data; 
    }, 

    createEntry: async (entry) => {
        const res = await api.post('/entries', entry); 
        return res.data; 
    }, 

    updateEntry: async (id, entry) => {
        const res = await api.put(`/entries/${id}`, entry); 
        return res.data; 
    },

    deleteEntry: async (id) => {
        await api.delete(`/entries/${id}`); 
    }, 

    getWeeklySummary: async () => {
        const res = await api.get('/path/to/summary'); 
        return res.data; 
    }
}

export default api 