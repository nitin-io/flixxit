import { compareSync, hashSync } from "bcrypt";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastLoggedIn: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = hashSync(this.password, 10);
    next();
  }
  next();
});

userSchema.methods.checkPassword = function (password) {
  try {
    const match = compareSync(password, this.password);
    if (match) {
      return Promise.resolve();
    }
    return Promise.reject({ status: 400, message: "incorrect password" });
  } catch (error) {
    return Promise.reject(error);
  }
};

userSchema.methods.updateLastLoggedIn = function () {
  return this.model("user").findByIdAndUpdate(this._id, {
    lastLoggedIn: Date.now(),
  });
};

const User = model("user", userSchema);

export default User;
