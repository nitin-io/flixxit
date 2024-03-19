import PropTypes from "prop-types";
import "./featured.css";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = ({ type }) => {
  const [featuredMovie, setfeaturedMovie] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${Math.floor(
          Math.random() * (500 - 1 + 1) + 1
        )}&sort_by=popularity.desc&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setfeaturedMovie(res.data.results[0]);
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      )
      .then((res) => setMovieGenres(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            {movieGenres?.map(({ id, name }) => (
              <option key={id} value={name} />
            ))}
          </select>
        </div>
      )}
      <img
        src={`https://image.tmdb.org/t/p/original/${featuredMovie?.backdrop_path}`}
        alt="featured"
      />
      <div className="info">
        <h1 className="title">{featuredMovie.title}</h1>
        <span className="desc">{featuredMovie?.overview}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            Play
          </button>
          <button className="more">
            <InfoOutlined />
            More
          </button>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {
  type: PropTypes.string,
};

export default Featured;
