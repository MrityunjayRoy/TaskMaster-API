import { Task } from "../models/tasks.model.js"

const showTasks = async (req, res) => {

    // Use try catch

    try {
        const tasks = req.body
        if (!tasks) {
            return res.status(404)
        }

        return res
            .status(201)
            .json(
                {
                    success: true,
                    data: tasks
                }
            )
    } catch (error) {
        console.log("Error getting data from server");
        
    }


}

const createTask = async () => {

    // const { taskName } = req.body
    // if (taskName.trim().isempty() === true) {
    //     throw
    // }

}

const getTask = () => {

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
