import express from "express";
import { config } from "dotenv";
import movieRoutes from "./routes/v1/movie.routes.js";
import userRoutes from "./routes/v1/user.routes.js";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
config();

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(
  cors({
    origin: ["http://127.0.0.1:5173"],
  })
);
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
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/movies", movieRoutes);

app.use("/*", (req, res) => {
  res.sendFile(resolve(__dirname, `../public/dist/index.html`));
});

export default app;
