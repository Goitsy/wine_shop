
import express from "express";
import "dotenv/config";
import { connect } from "./config/db.js";

connect();
const app = express();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});














