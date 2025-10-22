const express = require("express");
const pool = require("../db"); // import connection

const router = express.Router();

// Get all questions
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM question");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get questions by level
router.get("/level/:level", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM question WHERE diff = ?",
      [req.params.level]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get question by ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM question WHERE id = ?",
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new question
router.post("/", async (req, res) => {
  const { title, diff, topic, description, solution } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO question (title, diff, topic, description, solution) VALUES (?, ?, ?, ?, ?)",
      [title, diff, topic, description, solution]
    );
    res.status(201).json({ id: result.insertId, message: "Question added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update question
router.put("/:id", async (req, res) => {
  const { title, diff, topic, description, solution } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE question SET title=?, diff=?, topic=?, description=?, solution=? WHERE id=?",
      [title, diff, topic, description, solution, req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json({ message: "Question updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete question
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM question WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
