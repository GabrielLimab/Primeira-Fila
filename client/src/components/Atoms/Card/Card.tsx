import emptyStar from "../../../assets/emptyStar.svg";
import filledStar from "../../../assets/filledStar.svg";
import info from "../../../assets/info.svg";
import Button from "../Button/Button";
import "./Card.css";

interface CardProps {
  title: string;
  image: string;
  rate: number;
}

function Card({ title, image, rate }: CardProps) {
  return (
    <div className="card-container">
      <img src={image} alt="card" />
      <div className="movie-title">{title}</div>
      <div className="rate-info">
        <div className="avg-rate">
          {filledStar && <img src={filledStar} />}
          {rate}
        </div>
        <div className="user-rate">
          {emptyStar && <img src={emptyStar} />}
          Rate
        </div>
        <div className="info">{info && <img src={info} />}</div>
      </div>
    </div>
  );
}

export default Card;
