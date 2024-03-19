import Featured from "../../components/Featured";
import List from "../../components/List";
import Navbar from "../../components/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List genre={"popular"} title="Popular Movies" />
      <List genre={"popular"} title="Popular Movies" />
      <List genre={"popular"} title="Popular Movies" />
    </div>
  );
};

export default Home;
