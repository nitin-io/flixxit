import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const createUser = async (name, email, password) => {
  try {
    if (!name || !email || !password) {
      return { message: "Name, email, and password are required." };
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return { message: "E-mail already exist" };
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    const token = await jwt.sign(
      { id: newUser._id, email },
      process.env.JWT_SECRET
    );
    return { user: { id: newUser._id, name, email }, token };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      await user.checkPassword(password);
      await user.updateLastLoggedIn();
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET
      );

      return {
        user: { id: user._id, name: user.name, email: user.email },
        token,
      };
    }
    return { message: "User not found" };
  } catch (error) {
    return { message: "Email or password is incorrect" };
  }
};
