// Import required modules
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Import required routes

// Initialize app
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is running successfully!" });
});

// Use the authRoutes middleware

app.listen(port, () => {
  // Use the port variable
  console.log(`Server is running on port ${port}`);
});
