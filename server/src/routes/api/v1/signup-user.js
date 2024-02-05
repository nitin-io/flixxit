import { createUser } from "../../../controllers/user.controller.js";

export default async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { user, token, message } = await createUser(name, email, password);
    if (user && token) {
      return res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
        token,
      });
    }
    res.status(400).json({
      success: false,
      message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something is wrong, please try later",
    });
  }
};
