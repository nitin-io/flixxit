import express from "express";
import { config } from "dotenv";
import connectDB from "./services/db.js";
import apiRoutes from "./routes/api/v1/index.js";
config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));
app.use(express.static("public/client"));
app.use(express.static("views"));

// Test Route
app.get("/test", (req, res) => {
  res.json({ success: true, message: "Hello, World!" });
});

// Route
app.use("/api", apiRoutes);

app.get("/*", (req, res) => {
  res.sendFile("./public/dist/index.html");
});

connectDB.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
