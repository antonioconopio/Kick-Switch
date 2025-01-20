const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

exports.signup = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    // Validate input
    if (!username || !fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the email or username already exists (Optional: add validation for uniqueness)
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    // Hash the password asynchronously
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user in the database asynchronously
    const newUser = await User.create({
      username,
      fullname,
      email,
      password: hashedPassword,
    });

    // Respond with success
    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);

    // Handle unique constraint errors (for email/username)
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({ message: "Email or username already exists." });
    }

    res.status(500).json({ message: "Error creating user." });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email asynchronously
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Compare the password asynchronously
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate a token for the user
    const token = generateToken(user.id);

    // Respond with the token and user details
    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in." });
  }
};
