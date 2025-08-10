import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}`)
        console.log("Connected with the database");
    } catch (error) {
        console.log("Error connecting with the database");
    }
}

export {
    dbConnect
}