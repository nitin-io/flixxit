import app from "../app.js";
import connectDB from "../services/db.js";

connectDB((err) => {
  if (!err) {
    console.log("db connected!");
    return app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  }

  throw err;
});
