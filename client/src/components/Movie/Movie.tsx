import dunaBanner from "../../assets/duna-banner.png";
import dunaTrailer from "../../assets/duna-trailer.png";
import checkBox from "../../assets/check-box.svg";
import checkedBox from "../../assets/checked-box.svg";
import star from "../../assets/star.svg";
import rateStar from "../../assets/rate-star.svg";
import yellowStar from "../../assets/yellow-star.svg";
import add from "../../assets/add.svg";
import "./Movie.css";
import { useState } from "react";

function Movie() {
    const [watched, setWatched] = useState(false);
    const [rate, setRate] = useState(-1);
    const [showRatingButtons, setShowRatingButtons] = useState(false);
    const [showReviewInput, setShowReviewInput] = useState(false);

    function renderRatingButtons() {
        const ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return ratings.map((rating, index) => {
            return (
                <button key={index} className="rating-button" onClick={() => handleRatingClick(rating)}>
                    {rating}
                </button>
            );
        });
    }

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
                <text>{director}</text>
            </div>
        );
    }

    function renderNames(names = ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"]) {
        return names.map((name, index) => {
            return (
                <>
                    <text key={index}>{name}</text>   
                    {(index < names.length - 1) && <div key={index + names.length} className="ellipse"></div>}
                </>
            );
        });
    }

    function handleWatchedClick() {
        setWatched(!watched);
    }

    function handleRateClick() {
        setShowRatingButtons(!showRatingButtons);
    }

    function handleRatingClick(rating: number) {
        setRate(rating);
        setShowRatingButtons(!showRatingButtons);
    }

    function handleReviewClick() {
        setShowReviewInput(!showReviewInput);
    }

    function handleReviewSubmit() {
        const inputEl = document.getElementById('input-review') as HTMLInputElement;
        const review = inputEl.value;
        
        if (review === '') {
            return;
        }

        console.log(review);
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
                    <div className="right-side">
                        <div className='buttons-container'>
                            <button className="watched" onClick={() => handleWatchedClick()}>
                                <img src={watched ? checkedBox : checkBox}></img>
                                <text>Watched</text>
                            </button>
                            <button className="rate" onClick={() => handleRateClick()}>
                                <img src={rate === -1 ? star : yellowStar}></img>
                                <text>{rate === -1 ? 'Rate' : rate}</text>
                            </button>
                            <button className="rating">
                                <img src={rateStar}></img>
                                <text>8.9/10 (200k)</text>
                            </button>
                        </div>
                        {showRatingButtons && 
                        <div className='rating-buttons'>
                            {renderRatingButtons()}
                        </div>}
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
                    <div className="review-button">
                        <button onClick={() => handleReviewClick()}>
                            <text>Review</text>
                            <img src={add}></img>
                        </button>
                    </div>
                </div>
                {showReviewInput &&
                    <div className="review-input">
                        <textarea id='input-review' placeholder="Write your review here"></textarea>
                        <div className="submit-review">
                            <button onClick={() => handleReviewSubmit()}>Submit</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Movie;