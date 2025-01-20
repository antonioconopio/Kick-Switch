const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Import models after they are fully defined to avoid circular dependencies
const Listing = require("./listingModel");

// Define relationships
User.hasMany(Listing, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Listing.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = User;
