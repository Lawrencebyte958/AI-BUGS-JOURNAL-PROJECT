import app from './app';
import connectDB from './config/database';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// connection to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
