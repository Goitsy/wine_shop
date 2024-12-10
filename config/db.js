import mongoose from "mongoose";


export const connect = () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDb successfully connected")
    });
    mongoose.connection.on("error", (error) => {
        console.log("Could not connect to MongoDB", error)
    });
    const uri = process.env.MONGO_URI;
    return mongoose.connect(uri)
}

