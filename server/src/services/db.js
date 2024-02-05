import mongoose from "mongoose";

const connectDB = async (cb) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    return cb();
  } catch (error) {
    return cb(error);
  }
};

export default connectDB;
