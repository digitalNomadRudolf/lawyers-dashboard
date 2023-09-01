import express from "express";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import Register from "../models/Register.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Get the userData from the req.body
    const { name, email, password } = req.body;

    // Create a user registration
    const userRegistration = new Register({
      name,
      email,
      password,
    });
    // Save to DB
    await userRegistration.save();
    console.log({ userRegistration });
    // Generate unique token with a library
    const token = uuidv4();
    console.log({ token });

    const response = {
      ...userRegistration.toObject(),
      token,
    };
    // Send 201 status and send along the token formatted with json
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    // Disconnect from the database after the operation is complete
    await mongoose.disconnect();
  }
});

export default router;
