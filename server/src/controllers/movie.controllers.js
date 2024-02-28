import Movie from "../models/movie.model.js";

// Create
export const createMovie = async (req, res) => {
  try {
    const movie = new Movie({ ...req.body });
    const newMovie = await movie.save();
    res.json(newMovie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again later, server error" });
  }
};

// Read

// All

export const getMovies = async (req, res) => {
  try {
    const { type, genre } = req.query;

    let movies = [];
    if (type && genre) {
      movies = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { listType: type, genre } },
      ]);
    } else if (type) {
      movies = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { listType: type } },
      ]);
    } else if (genre) {
      movies = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { genre } },
      ]);
    } else {
      movies = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.json({ ...movies, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Please try again later, server error",
    });
  }
};

// Single with id

export const getMovieById = async (req, res) => {
  try {
    const movies = await Movie.findById();
    res.json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again later, server error" });
  }
};

// Get Random Movie or series

export const randomMovie = async (req, res) => {
  try {
    const movie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    res.json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again later, server error" });
  }
};

// Update

export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again later, server error" });
  }
};

// Delete

export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    res.json({ message: `${movie.title} is deleted succefully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again later, server error" });
  }
};
