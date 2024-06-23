import { Outlet, useNavigate } from "react-router-dom";
import Card from "../Atoms/Card/Card";
import starWars from "../../assets/starwars.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const sections = [
    {
      "section-title": "Principais escolhas para você",
      "section-subtitle": "Séries e filmes que você vai gostar",
      cards: [
        {
          id: "1",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "2",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "3",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "4",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
      ],
    },
    {
      "section-title": "Ação e aventura",
      "section-subtitle": "Séries e filmes de ação e aventura",
      cards: [
        {
          id: "5",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "6",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "7",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "8",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
      ],
    },
    {
      "section-title": "Comédia",
      "section-subtitle": "Séries e filmes de comédia",
      cards: [
        {
          id: "9",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "10",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "11",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
        {
          id: "12",
          title: "Star Wars",
          image: starWars,
          rate: 8.7,
        },
      ],
    },
  ];

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>
        <div>
          This is the home page.
          {sections[0].cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              image={card.image}
              rate={card.rate}
            />
          ))}
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </div>
  );
};

export default Home;
