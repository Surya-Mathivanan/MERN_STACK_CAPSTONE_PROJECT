/*const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const pool = require("../db"); // your MySQL connection

const router = express.Router();

// Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], prompt: "consent" })
);

// Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    try {
      // Use userid, not id
      const token = jwt.sign({ userId: req.user.userid }, process.env.JWT_SECRET, { expiresIn: "7d" });
      const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
      res.redirect(`${frontendUrl}?token=${token}`);
    } catch (err) {
      console.error("JWT generation error:", err);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Get current user
router.get("/me", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const [rows] = await pool.query("SELECT * FROM users WHERE userid = ?", [decoded.userId]);
    if (rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Invalid token" });
  }
});




// Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  async (req, res) => {
    try {
      const { displayName, emails } = req.user;
      const email = emails[0].value;

      // Check if user already exists
      const [existingUsers] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

      let userId;

      if (existingUsers.length > 0) {
        // User exists
        userId = existingUsers[0].userid;
      } else {
        // Insert new user
        const [result] = await pool.query(
          "INSERT INTO users (name, email, jdate) VALUES (?, ?, CURDATE())",
          [displayName, email]
        );
        userId = result.insertId;
      }

      // Generate JWT
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

      const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
      res.redirect(`${frontendUrl}?token=${token}`);
    } catch (err) {
      console.error("Google login error:", err);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;*/


const express = require("express");
const passport = require("passport");
const pool = require("../db"); // MySQL connection

const router = express.Router();

// Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], prompt: "consent" })
);

// Google callback — save user to MySQL
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  async (req, res) => {
    try {
      const { displayName, emails } = req.user;
      const email = emails?.[0]?.value;

      if (!email) {
        console.error("Google profile has no email:", req.user);
        return res.send("No email returned by Google");
      }

      // Check if user already exists
      const [existingUsers] = await pool.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

      if (existingUsers.length > 0) {
        console.log("User already exists:", email);
      } else {
        // Insert new user
        await pool.query(
          "INSERT INTO users (name, email, jdate) VALUES (?, ?, CURDATE())",
          [displayName, email]
        );
        console.log("New user inserted:", email);
      }

      res.redirect("http://localhost:3000\api\questions");
      res.send("Login successful! User saved to database.");
    } catch (err) {
      console.error("Google login error:", err);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;

