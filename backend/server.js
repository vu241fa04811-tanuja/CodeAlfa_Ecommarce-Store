const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Temporary: allow all users to log in
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  // Basic check: both fields must be filled
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  // ✅ Accept any email/password for now
  res.json({ token: "mock-jwt-token" });
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
