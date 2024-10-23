import User from "../model/user.model.js";
import bcrypt from "bcryptjs"; // Import bcryptjs

// Signup Function
export const signup = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { fullName, email, password } = req.body;

    // Validate input fields
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ fullName, email, password: hashedPassword });
    const createdUser = await newUser.save(); // Save the user to the database

    // Respond with success message
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullName: createdUser.fullName,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error); // Enhanced logging
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login Function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Respond with success message and user details
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error.message); // Enhanced logging
    return res.status(500).json({ message: "Internal server error" });
  }
};
