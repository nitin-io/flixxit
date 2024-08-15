import mongoose from "mongoose";
import config from "../utils/configs.js";

const connectDB = async (cb) => {
  try {
    await mongoose.connect(config.mongo.uri);
    return cb();
  } catch (error) {
    return cb(error);
  }
};

export default connectDB;
