const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  emails: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  assessment: {
    stage: String,
    programmingLevel: String,
    dailyHours: String,
    goal: String,
    languages: [String],
    verified: Boolean,
    quizScore: Number,
    completedAt: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
