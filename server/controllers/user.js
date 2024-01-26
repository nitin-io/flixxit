import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const createUser = async (name, email, password) => {
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw "email already exist";
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    const token = await jwt.sign({ name, email }, process.env.JWT_SECRET);
    return { user: { name, email }, token };
  } catch (error) {
    throw error.message;
  }
};
