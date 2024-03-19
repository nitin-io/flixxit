import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

// Create
export const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "E-mail already exist" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const token = await jwt.sign(
      { id: newUser._id, email },
      process.env.JWT_SECRET
    );
    return res
      .status(201)
      .json({ success: true, user: { id: newUser._id, name, email }, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Not found any account" });
    const match = await user.checkPassword(password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect Password!" });
    }
    const accessToken = await jwt.sign(
      { id: user._id, email },
      process.env.JWT_SECRET
    );
    await user.updateLastLoggedIn();
    return res.json({
      name: user.name,
      email,
      id: user._id,
      accessToken,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
