import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: String,
    year: Number,
    ageLimit: Number,
    images: {
      cover: String,
      title: String,
      thumb: String,
    },
    vidoes: {
      trailer: String,
      movie: String,
    },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Movie = model("Movie", movieSchema);

export default Movie;

/*
{
  "title": "Superman",
  "description": "test description",
  "genre": "Action",
  "year": 2020,
  "ageLimit": 16,
  "images": {
    "cover": "link",
    "title": "link",
    "thumb": "link"
  },
  "videos": {
    "trailer": "link",
    "movie": "link"
  }
}
*/
