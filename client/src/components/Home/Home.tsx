import { Outlet } from "react-router-dom";
import CardSection from "../CardSection/CardSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="background"></div>
        <div className="foreground">
          <CardSection
            title={"Principais escolhas pra você"}
            subtitle={"Séries e filmes que você vai gostar"}
            type={"for-you"}
          />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
