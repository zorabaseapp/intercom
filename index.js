const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Example API endpoint (future upgrade ready)
app.get("/api/status", (req, res) => {
  res.json({
    status: "NFT Generator Pro is running",
    version: "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
