
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const studentRoutes = require('./routes/studentRoutes');
const instructorRoutes = require('./routes/instructorRoutes');

// Use routes
app.use("/api", studentRoutes);
app.use("/api", instructorRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
