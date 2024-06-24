import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CardProps } from "../../types/CardProps";
import Card from "../Atoms/Card/Card";
import dot from "../../assets/dot.svg";
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

interface Card {
  image: string;
  title: string;
  rating: number;
}

function CardSection({ title, subtitle, type }: SectionProps) {
  const [numberOfVisibleCards, setNumberOfVisibleCards] = useState(1);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(cards.length / numberOfVisibleCards);

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

  function renderCards(
    currentPage: number,
    numberOfVisibleCards: number,
    cards?: any
  ) {
    return cards
      ?.slice(
        currentPage * numberOfVisibleCards,
        (currentPage + 1) * numberOfVisibleCards
      )
      .map((card: CardProps, index: number) => {
        return (
          <Card
            key={index}
            title={card.title}
            poster_path={card.poster_path}
            rate={card.rate}
          />
        );
      });
  }

  useEffect(() => {
    const handleResize = () => {
      if (cardSectionRef.current) {
        const cardWidth =
          cardSectionRef.current.querySelector(".card")?.clientWidth || 140;
        const sectionWidth = cardSectionRef.current.offsetWidth;
        console.log(
          sectionWidth,
          cardWidth,
          Math.floor(sectionWidth / cardWidth)
        );
        setNumberOfVisibleCards(Math.floor(sectionWidth / cardWidth));
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards = await getCards(type);
      setCards(fetchedCards);
    };

    fetchCards();
  }, []);

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
            disabled={currentPage === totalPages - 1 || totalPages === 1}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="card-section" ref={cardSectionRef}>
        {renderCards(currentPage, numberOfVisibleCards, cards)}
      </div>
    </div>
  );
}

export default CardSection;
