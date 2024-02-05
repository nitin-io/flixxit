import { loginUser } from "../../../controllers/user.controller.js";

export default async (req, res) => {
  try {
    const { email, password } = req.body;

    const { user, token, message } = await loginUser(email, password);

    if (user && token) {
      return res.json({
        user,
        token,
        success: true,
        message: "Logged in successfully",
      });
    }
    return res.status(401).json({ success: false, message });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is wrong, please try later",
    });
  }
};
