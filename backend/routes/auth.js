const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], prompt: "consent" })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    try {
      // Generate JWT token
      const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      // Redirect to frontend with token
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(`${frontendUrl}?token=${token}`);
    } catch (error) {
      console.error("JWT token generation error:", error);
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      res.redirect(`${frontendUrl}?error=authentication_failed`);
    }
  }
);

// Get current user
router.get("/me", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const User = require("../models/User");
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Save user assessment
router.post("/assessment", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const User = require("../models/User");

    const user = await User.findById(decoded.userId);
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
    res
      .status(500)
      .json({ message: "Error saving assessment", error: error.message });
  }
});

// Get user assessment
router.get("/assessment", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const User = require("../models/User");

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ assessment: user.assessment });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving assessment", error: error.message });
  }
});

// Logout
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed", error: err.message });
    }
    res.json({ message: "Logged out successfully" });
  });
});

// Get user statistics
router.get("/stats", async (req, res) => {
  try {
    const User = require("../models/User");
    const totalUsers = await User.countDocuments();
    const usersWithAssessment = await User.countDocuments({
      "assessment.stage": { $exists: true },
    });

    res.json({
      totalUsers,
      usersWithAssessment,
      message: "Statistics retrieved successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving stats", error: error.message });
  }
});

// Clear all users (for testing purposes only)
router.delete("/clear-users", async (req, res) => {
  try {
    const User = require("../models/User");
    await User.deleteMany({});
    res.json({ message: "All users cleared successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error clearing users", error: error.message });
  }
});

module.exports = router;
