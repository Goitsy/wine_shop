import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: String }
})


const Product = model("Product", productSchema
)

export default Product