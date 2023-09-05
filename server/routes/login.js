import express from "express";
import mongoose from "mongoose";
import UserProfile from "../models/UserProfile.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { email, password } = req.body;

    // Find user in DB
    const user = await UserProfile.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    // Compare password with hashed password in DB
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    // If they don't match, return an 401 error of "Incorrect password"
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    // Generate token using uuidV4
    const token = uuidv4();
    // Save the token and expiration time to user in DB
    user.token = token;
    user.tokenExpiration = new Date(Date.now() + 3600000);

    await user.save();
    // Return the user's token as a response(200 status)
    return res.status(200).json({ token });
  } catch (error) {
    // 500 status with error message
    return res.status(500).json({ error: error.message });
  } finally {
    // Disconnect from DB
    await mongoose.disconnect();
  }
});

export default router;
