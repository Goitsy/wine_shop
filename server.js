import express from "express"
import "dotenv/config";
import mongoose from "mongoose"




const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("server is running")

})

// Middleware








