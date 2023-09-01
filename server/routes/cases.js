import express from "express";
import Case from "../models/Case.js";

const router = express.Router();

// Get all cases
router.get("/", async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new case
router.post("/", async (req, res) => {
  const newCase = new Case({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  });

  try {
    const savedCase = await newCase.save();
    res.status(201).json(savedCase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
