import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        taskName: {
            type: String,
            required: true,
            lowercase: true
        }

    },
    {
        timestamps: true
    }
)

export const task = mongoose.model("Task", taskSchema)