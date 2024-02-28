import jwt from "jsonwebtoken";

export default function (req, res, next) {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader)
      return res.status(401).json({ message: "authorization token not found" });
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.userId = user.id;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error, Please try again later." });
  }
}
