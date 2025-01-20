const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Listing = sequelize.define("Listing", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  condition: {
    type: DataTypes.ENUM("new", "like-new", "used"),
    allowNull: false,
  },
  method: {
    type: DataTypes.ENUM("ship", "meetup", "ship-or-meetup"),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
  },
});

module.exports = Listing;
