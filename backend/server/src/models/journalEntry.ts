import mongoose, { Document, Schema } from 'mongoose';


export interface IJournalEntry extends Document {
title: string;
content: string;
userId?: string;
createdAt: Date
updatedAt: Date;
}

const JournalEntrySchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true, 
            maxlength: [200, 'Title cannot exceed 200 characters']
        },
        content: {
            type: String,
            required: true
        }, 
        userId: {
            type: String, 
            required: false
        }
    },
    { timestamps: true }
); 


export default mongoose.model<IJournalEntry>('JournalEntry', JournalEntrySchema);