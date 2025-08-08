import express from "express";
import { showTasks } from "../controllers/tasks.controller.js";

const router = express.Router()

router.route("/").get(showTasks)

export {router as taskRouter}