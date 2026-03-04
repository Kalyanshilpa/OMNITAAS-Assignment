const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 5, 
  message: {
    message: "Too many login attempts. Try again later."
  },
});


app.post("/login", loginLimiter, (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});