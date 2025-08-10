import { Task } from "../models/tasks.model.js"
import { ApiError } from "../utils/APIError.js"
import { ApiResponse } from "../utils/APIResponse.js"

const showTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        if (!tasks) {
            throw new ApiError(400, "Error finding tasks")
        }

        return res.status(201).json(
            new ApiResponse(201, "All tasks founded", tasks))

    } catch (error) {
        throw new ApiError(400, "Error finding tasks", error)
    }
}

const createTask = async (req, res) => {
    try {
        const taskData = req.body
        if (!taskData) {
            throw new ApiError(401, "Invalid task data")
        }

        const task = await Task.create(taskData)
        if (!task) {
            throw new ApiError(401, "Error creating task")
        }

        return res.status(200).json(
            new ApiResponse(200, "Task created successfully", task)
        )
    } catch (error) {
        throw new ApiError(400, "Error creating task")
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            throw new ApiError(402, `No task with taskID : ${taskID}`)
        }

        return res.status(202).json(
            new ApiResponse(202, "Task extracted successfully", task)
        )
    } catch (error) {
        throw new ApiError(402, "Error fetching task", error)
    }
}

const updateTask = () => {

}

const deleteTask = () => {

}

export {
    showTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
