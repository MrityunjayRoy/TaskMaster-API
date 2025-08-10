import express from "express";
import { createTask, deleteTask, getTask, showTasks, updateTask } from "../controllers/tasks.controller.js";

const router = express.Router()

router.route("/").get(showTasks).post(createTask)
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)

export {router as taskRouter}