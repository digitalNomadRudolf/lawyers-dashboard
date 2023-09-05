import express from "express";
import mongoose from "mongoose";
import Register from "../models/Register.js";
import UserProfile from "../models/UserProfile.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Get the userData from the req.body
    const { name, email, password } = req.body;

    // Check if user exists in DB
    const existingUser = UserProfile.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists!" });
    }

    // Hash password before saving it in DB
    const hashedPassword = bcrypt.hash(password, 12);

    // Create a user registration
    const userRegistration = new Register({
      name,
      email,
      password: hashedPassword,
    });

    // Save to DB
    await userRegistration.save();
    console.log({ userRegistration });

    const response = {
      ...userRegistration.toObject(),
    };
    // Send 201 status and send response
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    // Disconnect from the database after the operation is complete
    await mongoose.disconnect();
  }
});

export default router;
