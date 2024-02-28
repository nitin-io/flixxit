import User from "../models/user.model.js";

export default async function (req, res, next) {
  try {
    const user = await User.findById(req.userId);
    if (!user && !user.admin) {
      return res.status(401).json({ message: "Unauthoriazed Request" });
    }
    return next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ messsage: "Please try again later, server error" });
  }
}
