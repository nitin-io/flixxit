import express from "express";
import { config } from "dotenv";
import apiRoutes from "./routes/api/v1/index.js";
import morgan from "morgan";
config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));
app.use(express.static("public/client"));
app.use(express.static("views"));

// Third-party middlewares
app.use(morgan("dev"));

// Test Route
app.get("/test", (req, res) => {
  res.json({ success: true, message: "Hello, World!" });
});

// Route
app.use("/api", apiRoutes);

app.get("/*", (req, res) => {
  res.sendFile("./public/dist/index.html");
});

export default app;
