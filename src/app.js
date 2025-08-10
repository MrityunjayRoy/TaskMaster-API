import express from "express"
import { taskRouter } from "./routes/tasks.route.js"

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Welcome user")
})

app.use("/api/v1/tasks", taskRouter)

export {app}