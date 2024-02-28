import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.css";
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <div className="watch">
      <Link to="/" className="home-btn">
        <ArrowBackOutlined />
        Home
      </Link>
      <video className="video" autoPlay controls src="" />
    </div>
  );
};

export default Watch;
