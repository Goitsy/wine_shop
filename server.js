import express from "express";
import "dotenv/config";
import { connect } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/ProductRoutes.js"

connect();
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
// app.use("/api/product", productRoutes)
const PORT = process.env.PORT || 5001;





app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
