import { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem";
import "./list.css";

const List = () => {
  const listRef = useRef();
  const numArr = new Array(20).fill("");
  const [sliderNumber, setSliderNumber] = useState(numArr.length);

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
      <span className="list-title">List Title</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider-arrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {numArr.map((el, i) => (
            <ListItem number={i} key={i} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
