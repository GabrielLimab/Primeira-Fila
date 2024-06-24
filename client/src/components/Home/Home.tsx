import { Outlet } from "react-router-dom";
import CardSection from "../CardSection/CardSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="background"></div>
      <div className="foreground">
        <div className="card-section-container">
          <CardSection
            title={"Principais escolhas pra você"}
            subtitle={"Séries e filmes que você vai gostar"}
            type={"for-you"}
          />
          <CardSection
            title={"Em alta"}
            subtitle={"Os filmes mais populares da semana"}
            type={"top-rated"}
          />
          <CardSection
            title={"Em cartaz"}
            subtitle={"Filmes que estão em cartaz nos cinemas"}
            type={"now-playing"}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
