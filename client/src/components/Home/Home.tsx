import { Outlet, useNavigate } from "react-router-dom";
import Card from "../Atoms/Card/Card";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const cards = [
    [],
    [],
    []
  ]

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>
        <div>
          This is the home page.
          <Card
            title="Duna"
            image="../assets/starwars.png"
            link=""
            rate={8}
          ></Card>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </div>
  );
};

export default Home;
