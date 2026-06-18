// server.js
const express = require("express");
const app = express();

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

app.listen(5000, () => console.log("Server running on port 5000"));
