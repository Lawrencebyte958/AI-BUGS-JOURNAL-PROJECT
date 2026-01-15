import express, { Application } from 'express'
import cors from 'cors';
import entryRoutes from './routes/entryRoutes';

const app: Application = express();

// Middleware
app.use(cors()); //
app.use(express.json()); //parses the JSON bodies


// server health check route 
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' })
});

//Routes
app.use('/api/entries', entryRoutes);

export default app;