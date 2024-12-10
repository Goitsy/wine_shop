import express from "express"
import "dotenv/config";

import { connect } from "./config/db.js";

// connect db

connect()

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("server is running")

})











