import { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem";
import "./list.css";

const List = ({ genre, title }) => {
  const listRef = useRef();
  const [list, setList] = useState({});
  const [sliderNumber, setSliderNumber] = useState(list.length);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${genre}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      )
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, [genre]);

  const handleClick = (dir) => {
    const distance = listRef.current.getBoundingClientRect().x;

    if (dir === "left" && distance < 0) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${250 + distance}px)`;
    } else if (dir === "right" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      // do something
    }
  };
  return (
    <div className="list">
      <span className="list-title">{title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider-arrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {list?.results?.map(({ id, backdrop_path, overview }) => {
            return (
              <ListItem cover={backdrop_path} key={id} overview={overview} />
            );
          })}
        </div>
        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

List.propTypes = {
  genre: PropTypes.string,
  title: PropTypes.string,
};

export default List;
