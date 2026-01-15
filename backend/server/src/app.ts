import express, { Application } from 'express'
import cors from 'cors';
import entryRoutes from './routes/entryRoutes';
import summaryRoutes from './routes/summaryRoutes'

const app: Application = express();

// Middleware
app.use(cors()); //
app.use(express.json()); //parses the JSON bodies


// server health check route 
app.use('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' })
});

//Routes
app.use('/api/entries', entryRoutes);
app.use('/api/summary', summaryRoutes)



export default app;