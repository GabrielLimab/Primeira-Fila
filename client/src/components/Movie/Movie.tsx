import { Link, useParams } from "react-router-dom";
import dunaBanner from "../../assets/duna-banner.png";
import dunaTrailer from "../../assets/duna-trailer.png";
import checkBox from "../../assets/check-box.svg";
import star from "../../assets/star.svg";
import rateStar from "../../assets/rate-star.svg";
import "./Movie.css";

const Movie = () => {
    const { teste } = useParams();

    function renderGenreButtons() {
        const genres = ["Action", "Adventure", "Drama"];

        return genres.map((genre, index) => {
            return (
                <button key={index} className="genre-button">
                    {genre}
                </button>
            );
        });
    }

    function renderPlot() {
        const plot = "Paul Atreides unites with Chani and the Fremen while seeking revenge against  who destroyed his family."

        return (
            <div className="plot-text">
                <text>{plot}</text>
            </div>
        );
    }

    function renderDirector() {
        const director = "Denis Villeneuve";

        return (
            <div className="director-text">
                {director}
            </div>
        );
    }

    function renderNames(names = ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"]) {
        return names.map((name, index) => {
            return (
                <>
                    {name}    
                    {(index < names.length - 1) && <div className="ellipse"></div>}
                </>
            );
        });
    }

    return (
        <div className="movie-page">
            <div className="movie-container">
                <h1>Dune: Part Two</h1>
                <div className="small-info">
                    <div className="info-container">
                        <text>2024</text>
                        <div className="ellipse"></div>
                        <text>PG-13</text>
                        <div className="ellipse"></div>
                        <text>2h 46min</text>
                    </div>
                    <div className='buttons-container'>
                        <button className="watched">
                            <img src={checkBox}></img>
                            <text>Watched</text>
                        </button>
                        <button className="rate">
                            <img src={star}></img>
                            <text>Rate</text>
                        </button>
                        <button className="rating">
                            <img src={rateStar}></img>
                            <text>8.9/10 (200k)</text>
                        </button>
                    </div>
                </div>
                <div className="movie-images">
                    <img className="movie-banner" src={dunaBanner}></img>
                    <img src={dunaTrailer}></img>
                </div>
                <div className="movie-info">
                    <div className='genre'>
                        <div className="h5-container">
                            <h5>Genre</h5>
                        </div>
                        <div className="genre-buttons">
                            {renderGenreButtons()}
                        </div>
                    </div>
                    <div className='plot'>
                        <div className="h5-container">
                            <h5>Plot</h5>
                        </div>
                        {renderPlot()}
                    </div>
                    <div className="director">
                        <div className="h5-container">
                            <h5>Director</h5>
                        </div>
                        {renderDirector()}
                    </div>
                    <div className='writers'>
                        <div className="h5-container">
                            <h5>Writers</h5>
                        </div>
                        <div className="names-text">{renderNames()}</div>
                    </div>
                    <div className='stars'>
                        <div className="h5-container">
                            <h5>Stars</h5>
                        </div>
                        <div className="names-text">{renderNames()}</div>
                    </div>
                    <div className="awards">
                        <div className="h5-container">
                            <h5>Awards</h5>
                        </div>
                        <div className="names-text">{renderNames()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;