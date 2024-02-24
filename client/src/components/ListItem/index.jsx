import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listItem.css";

const ListItem = () => {
  return (
    <div className="list-item">
      <img src="spiderman-homecoming-movie-poster-c1-1920x1080.jpg" alt="" />
      <div className="item-info">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="item-info-top">
          <span>2 hours 15 minutes</span>
          <span>18+</span>
          <span>2023</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          incidunt natus eveniet voluptatibus,
        </div>
      </div>
    </div>
  );
};

export default ListItem;
