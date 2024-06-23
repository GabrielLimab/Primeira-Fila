import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CardProps } from "../../types/CardProps";
import Card from "../Atoms/Card/Card";
import dot from "../../assets/dot.svg";
import starWars from "../../assets/starwars.png";
import "./CardSection.css";
import {
  getNowPlayingMovies,
  getRecommendedMovies,
  getTopRatedMovies,
} from "../../services/movie";

interface SectionProps {
  title: string;
  subtitle?: string;
  type: string;
}

async function getCards(type: string) {
  let cards: CardProps[] = [];
  switch (type) {
    case "for-you":
      cards = await getRecommendedMovies();
      break;
    case "top-rated":
      cards = await getTopRatedMovies();
      break;
    case "now-playing":
      cards = await getNowPlayingMovies();
      break;
  }

  return cards;
}

function renderCards(cards: CardProps[]) {
  if (!cards) {
    return (
      <div className="empty-card-section">
        <h1>No movies found</h1>
      </div>
    );
  }

  return cards.map((card: CardProps) => {
    return (
      <Card
        key={card.title}
        title={card.title}
        poster_path={card.poster_path}
        rate={card.rate}
      />
    );
  });
}

interface Card {
  image: string;
  title: string;
  rating: number;
}

function CardSection({ title, subtitle, type }: SectionProps) {
  const tempCards = [
    {
      id: "1",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "2",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "3",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "4",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "5",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "6",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "7",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "8",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "9",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
    {
      id: "10",
      title: "Star Wars",
      poster_path: starWars,
      rate: 8.7,
    },
  ];

  const [visibleCards, setVisibleCards] = useState(0);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(12.5 / visibleCards);
  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (cardSectionRef.current) {
        const cardWidth = 200; // largura do cartão (ajustar conforme necessário)
        const sectionWidth = cardSectionRef.current.offsetWidth;
        setVisibleCards(Math.floor(sectionWidth / cardWidth));
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Chamada inicial para definir o número de cartões visíveis

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     const fetchedCards = await getCards(type);
  //     setCards(fetchedCards);
  //   };

  //   fetchCards();
  // }, [type]);

  return (
    <div className="card-section-container">
      <div className="card-section-top">
        <div className="title-container">
          <Link className="section-title" to="#">
            {dot && <img src={dot} className="dot-icon" />}
            {title}
          </Link>
          <div className="section-subtitle">{subtitle}</div>
        </div>
        <div className="carousel-controls">
          <button
            className="prev"
            onClick={handlePrevClick}
            disabled={currentPage === 0}
          >
            &lt;
          </button>
          <button
            className="next"
            onClick={handleNextClick}
            disabled={currentPage === totalPages - 1}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="card-section" ref={cardSectionRef}>
        {tempCards
          .slice(currentPage * visibleCards, (currentPage + 1) * visibleCards)
          .map((card, index) => (
            <Card
              key={card.title}
              title={card.title}
              poster_path={card.poster_path}
              rate={card.rate}
            />
          ))}
      </div>
    </div>
  );
}

export default CardSection;
