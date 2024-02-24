import PropTypes from "prop-types";
import "./featured.css";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">adventure</option>
            <option value="comedy">comedy</option>
            <option value="crime">crime</option>
            <option value="fantasy">fantasy</option>
            <option value="historical">historical</option>
            <option value="horror">horror</option>
            <option value="romance">romance</option>
            <option value="sci-fi">sci-fi</option>
            <option value="thriller">thriller</option>
            <option value="western">western</option>
            <option value="animation">animation</option>
            <option value="drama">drama</option>
            <option value="documentry">documentry</option>
          </select>
        </div>
      )}
      <img
        src="images/spiderman-homecoming-movie-poster-c1-1920x1080.jpg"
        alt="featured"
      />
      <div className="info">
        <img src="images/Spider-Man.svg" alt="spider-man-title" />
        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae unde
          sit eveniet. Corrupti, quam nemo nisi, molestias, consequatur
          asperiores alias laudantium molestiae delectus eligendi in magni
          distinctio id cum laboriosam.
        </span>
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
