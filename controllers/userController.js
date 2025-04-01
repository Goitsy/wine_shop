import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const registerUser = async (req, res) => {
  const { name, email, password, role = "user" } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password, role });

    const token = jwt.sign({ id: user._id }, "secret_key", {
      expiresIn: "30d",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserRole = async (req, res) => {
  const { id, role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    ).select("-password");
    if (!user) return res.status(404).json({ message: "Could not find user" });
    res.json({ message: "User role updated", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, "secret_key", {
    expiresIn: "30d",
  });
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);

      res.json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { registerUser, getAllUsers, updateUserRole, loginUser };
