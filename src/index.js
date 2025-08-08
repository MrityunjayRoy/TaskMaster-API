import express from "express"
import { dbConnect } from "./db/connect.js"
import { taskRouter } from "./routes/tasks.js"
import dotenv from 'dotenv'

dotenv.config({
    path: ".env"
})

const app = express()
const PORT = 3000



dbConnect()
    .then(
        app.listen(PORT, () => {
            console.log('Server is running at port', PORT);
        })
    )
    .catch((error) => {
        console.log("Error in connecting with database", error);
    })

