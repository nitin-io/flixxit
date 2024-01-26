import { hashSync } from "bcrypt";
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
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", function (next) {
//   if (this.isModified("password")) {
//     console.log("Modified");
//     this.password = hashSync(password, 10);
//     next();
//   }
//   console.log("Not Modified");
//   next();
// });

const User = model("user", userSchema);

export default User;
