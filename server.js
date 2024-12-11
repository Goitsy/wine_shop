import express from "express";
import "dotenv/config";
import { connect } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

connect();
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
