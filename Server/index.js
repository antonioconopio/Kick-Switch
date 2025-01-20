require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const cors = require("cors");
const sequelize = require("./config/db"); // Import Sequelize instance
const { User } = require("./models/userModel"); // Import the User model
const { Listing } = require("./models/listingModel");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", listingRoutes);
app.use("/api", uploadRoutes);
app.use("/uploads", express.static("uploads"));


// Server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
