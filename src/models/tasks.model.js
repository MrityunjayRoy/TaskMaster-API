import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        taskName: {
            type: String,
            required: true,
            lowercase: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export const Task = mongoose.model("Task", taskSchema)