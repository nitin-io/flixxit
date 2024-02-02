import { createUser } from "../../../controllers/user.js";

const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { user, token } = await createUser(name, email, password);
    res.json({ success: true, user, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export default signUpUser;
