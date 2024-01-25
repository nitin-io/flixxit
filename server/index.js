import express from "express";
import { config } from "dotenv";
config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));
app.use(express.static("public/client"));
app.use(express.static("views"));

// Route
app.get("/hello", (req, res) => {
  res.render("index");
});

app.get("/*", (req, res) => {
  res.sendFile("./public/dist/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
