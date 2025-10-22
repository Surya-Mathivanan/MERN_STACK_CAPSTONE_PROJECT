require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const questionRoutes = require("./routes/questions");
require("./config/passport");

const passport = require("passport");

const app = express();
app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.json());
app.use("/auth",require("./routes/auth"));
app.use("/api/questions", questionRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
