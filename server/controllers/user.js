import { compareSync, hashSync } from "bcrypt";
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
    const token = await jwt.sign(
      { id: newUser._id, email },
      process.env.JWT_SECRET
    );
    return { user: { id: newUser._id, name, email }, token };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      await user.checkPassword(password);

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET
      );

      return {
        user: { id: user._id, name: user.name, email: user.email },
        token,
      };
    }
    throw new Error("User not found");
  } catch (error) {
    throw { error };
  }
};
