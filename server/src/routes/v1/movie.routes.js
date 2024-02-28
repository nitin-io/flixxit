import { Router } from "express";
import {
  createMovie,
  getMovieById,
  getMovies,
  randomMovie,
  updateMovie,
  deleteMovie,
} from "../../controllers/movie.controllers.js";
import verifyAdmin from "../../utils/verifyAdmin.js";
import verifyToken from "../../utils/verifyToken.js";
const router = Router();

router.get("/", verifyToken, getMovies);
router.get("/find/:id", verifyToken, getMovieById);
router.get("/random", verifyToken, randomMovie);

// Admin Routes
router.post("/create", verifyToken, verifyAdmin, createMovie);
router.put("/update/:id", verifyToken, verifyAdmin, updateMovie);
router.delete("/update/:id", verifyToken, verifyAdmin, deleteMovie);

export default router;
