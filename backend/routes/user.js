const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Get user profile
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      name: user.name,
      emails: user.emails,
      assessment: user.assessment,
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error retrieving profile", 
      error: error.message 
    });
  }
});

// Save/Update user assessment
router.post("/assessment", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user assessment
    user.assessment = {
      ...req.body,
      completedAt: new Date(),
    };

    await user.save();
    
    res.json({
      message: "Assessment saved successfully",
      assessment: user.assessment,
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error saving assessment", 
      error: error.message 
    });
  }
});

// Get user assessment
router.get("/assessment", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ 
      assessment: user.assessment 
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error retrieving assessment", 
      error: error.message 
    });
  }
});

module.exports = router;
