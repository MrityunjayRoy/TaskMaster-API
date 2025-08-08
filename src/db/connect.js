import mongoose from "mongoose";

const dbConnect = async() => {
    try {
        await mongoose.connect("mongodb+srv://royr91599:mjroy2206@learnbackend.i51wjpi.mongodb.net/?retryWrites=true&w=majority&appName=learnBackend")
        console.log("Connected with the database");
    } catch (error) {
        console.log("Error connecting with the database");
    }
    
} 

export {
    dbConnect
}