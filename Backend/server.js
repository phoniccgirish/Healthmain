import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

// Load exercises.json
const exercises = JSON.parse(fs.readFileSync("./data/exercises.json", "utf-8"));

// Root route (for testing)
app.get("/", (req, res) => {
  res.send("API is working ✅. Try /api/exercises/chest");
});

// Muscle route
app.get("/api/exercises/:muscle", (req, res) => {
  const { muscle } = req.params;
  const filtered = exercises[muscle.toLowerCase()] || [];
  res.json(filtered);
});

// Start server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
