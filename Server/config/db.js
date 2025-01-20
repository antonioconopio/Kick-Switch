const dotenv = require("dotenv");

dotenv.config();

const { Sequelize } = require("sequelize");

// Set up a new Sequelize instance to connect to MySQL
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

module.exports = sequelize;
