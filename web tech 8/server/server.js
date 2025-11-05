// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import routes
const policyRoutes = require("./routes/policyRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB Connection
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/insurance_db";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Successfully connected to MongoDB");
    console.log(`📊 Database: ${mongoose.connection.name}`);
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  });

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Insurance Policy Management API",
    endpoints: {
      getAllPolicies: "GET /api/policies",
      getPolicy: "GET /api/policies/:id",
      createPolicy: "POST /api/policies",
      updatePolicy: "PUT /api/policies/:id",
      deletePolicy: "DELETE /api/policies/:id",
    },
  });
});

// Policy API routes
app.use("/api/policies", policyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: err.message,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(
    `📡 API endpoints available at http://localhost:${PORT}/api/policies`
  );
});
