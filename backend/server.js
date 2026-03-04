const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
   origin: "frontend-q24la55j6-shilpas-projects-559ec8e3.vercel.app"
}));
app.use(express.json());

const PORT =  5000;



app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
