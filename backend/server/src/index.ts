// Load environment variables
dotenv.config();
import app from './app';
import connectDB from './config/database';
import dotenv from 'dotenv';



const PORT = process.env.PORT || 3000;

// connection to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
