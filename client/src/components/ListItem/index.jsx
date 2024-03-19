import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./listItem.css";

const ListItem = ({ cover, overview }) => {
  return (
    <div className="list-item">
      <img src={`https://image.tmdb.org/t/p/w500${cover}`} alt="" />
      <div className="item-info">
        <div className="icons">
          <Link to="/watch/:id">
            <PlayArrow />
          </Link>
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="item-info-top">
          <span>2 hours 15 minutes</span>
          <span>18+</span>
          <span>2023</span>
        </div>
        <div className="desc">{overview}</div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  cover: PropTypes.string,
  overview: PropTypes.string,
};

export default ListItem;
