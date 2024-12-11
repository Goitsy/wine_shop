import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userScheme = new Schema({
    username: String,
    email: String,
    password: String

});

const User = model("User", userSchema);

module.export = User;