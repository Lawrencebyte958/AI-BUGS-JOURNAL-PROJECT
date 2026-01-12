import mongoose, { Document, Schema } from 'mongoose';


export interface IJournalEntry extends Document {
title: string;
content: string;
userId?: string;
createdAt: Date
updatedAt: Date;
}

const JournalEntrySchema: Schema = new Schema (
    {
        title: {
            type:String,
            required: [true, 'Title is required'],
            trim: true, 
            maxlength: [200, 'Title cannot exceeed 200 characters']
        },
        content: {
            type:String,
            required: 
        }
    }
)