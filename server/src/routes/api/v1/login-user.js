import { loginUser } from "../../../controllers/user.js";

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required." });
    }
    const { user, token } = await loginUser(email, password);
    return res.json({ user, token, success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
