import express from "express"
import { taskRouter } from "./routes/tasks"

app.use(express.json())

app.use("/api/v1/tasks", taskRouter)