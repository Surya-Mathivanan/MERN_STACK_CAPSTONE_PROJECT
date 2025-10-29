const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();
require("./config/passport");

const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/questions");
const userRoutes = require("./routes/user");

const app = express();

// Middleware - CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/dsa-pathway", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "DSA Pathway Backend API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
