import dunaBanner from "../../assets/duna-banner.png";
import dunaTrailer from "../../assets/duna-trailer.png";
import checkBox from "../../assets/check-box.svg";
import checkedBox from "../../assets/checked-box.svg";
import star from "../../assets/star.svg";
import rateStar from "../../assets/rate-star.svg";
import yellowStar from "../../assets/yellow-star.svg";
import add from "../../assets/add.svg";
import "./Movie.css";
import {getReviews, getWatchedMovie, getMovieRating, getMovieAverageRating, getMovieDetails, createRating, watchedMovie, createReview} from "../../services/movie";
import { getUserById } from "../../services/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { render } from "react-dom";

function Movie() {
    const { id } = useParams() as { id: string };

    const [movie, setMovie] = useState({} as any);
    const [watched, setWatched] = useState(false);
    const [rate, setRate] = useState(-1);
    const [voteCount, setVoteCount] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [showRatingButtons, setShowRatingButtons] = useState(false);
    const [showReviewInput, setShowReviewInput] = useState(false);
    const [reviews, setReviews] = useState([] as any);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const getMovie = async () => {
          try {
            const response = await getMovieDetails(id);
            setMovie(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching movie data:', error);
          }
        };

        const getWatched = async () => {
            try {
                const response = await getWatchedMovie(id);
                setWatched(response.data.watched);
            } catch (error) {
                console.error('Error fetching watched data:', error);
            }
        }

        const getAverageRating = async () => {
            try {
                const response = await getMovieAverageRating(id);
                setAverageRating(response.data.average);
                setVoteCount(response.data.count);
            } catch (error) {
                console.error('Error fetching average rating data:', error);
            }
        }

        const getRating = async () => {
            try {
                const response = await getMovieRating(id);
                setRate(response.data);
            } catch (error) {
                console.error('Error fetching rating data:', error);
            }
        }

        const getReview = async () => {
            try {
                const response = await getReviews(id);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching review data:', error);
            }
        }
    
        getMovie();
        getWatched();
        getAverageRating();
        getRating();
        getReview();
      }, [loading, id, rate]);

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
        if (loading) {
            return;
        }

        const genres = movie.genres;

        return genres.map((genre, index) => {
            return (
                <button key={index} className="genre-button">
                    {genre}
                </button>
            );
        });
    }

    function renderPlot() {
        if (loading) {
            return;
        }

        const plot = movie.plot

        return (
            <div className="plot-text">
                <text>{plot}</text>
            </div>
        );
    }

    function renderDirector() {
        if (loading) {
            return;
        }

        const director = movie.director;

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

    function renderMovieImages() {
        const posterPath = movie.poster;
        const backdropPath = movie.backdrop;
        
        const poster = `https://image.tmdb.org/t/p/original${posterPath}`;
        const backdrop = `https://image.tmdb.org/t/p/original${backdropPath}`;
        return (
            <>
                <img className="movie-banner" src={poster}></img>
                <img className="movie-backdrop" src={backdrop}></img>
            </>
        )
    }

    function getDuration() {
        if (loading) {
            return;
        }

        const runtime = movie.runtime;
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        return `${hours}h ${minutes}min`;
    }

    function handleWatchedClick() {
        watchedMovie(id);
        setWatched(!watched);
    }

    function handleRateClick() {
        setShowRatingButtons(!showRatingButtons);
    }

    async function handleRatingClick(rating: number) {
        createRating(id, rating);
        setRate(rating);
        setShowRatingButtons(!showRatingButtons);
    }

    function handleReviewClick() {
        setShowReviewInput(!showReviewInput);
    }

    async function handleReviewSubmit() {
        const review = (document.getElementById('input-review') as HTMLInputElement).value;
        createReview(id, review);
        setReviews([...reviews, {review}]);
        setShowReviewInput(!showReviewInput);
    }

    function renderReviews() {
        if (loading) {
            return;
        }

        return reviews.map((review, index) => {
            return (
                <div key={index} className="review">
                    <text>{review.review}</text>
                </div>
            );
        });
    }

    return (
        <div className="movie-page">
            <div className="movie-container">
                <h1>{!loading && movie.title}</h1>
                <div className="small-info">
                    <div className="info-container">
                        <text>{!loading && new Date(movie.releaseDate).getFullYear()}</text>
                        <div className="ellipse"></div>
                        <text>{getDuration()}</text>
                    </div>
                    <div className="right-side">
                        <div className='buttons-container'>
                            <button className="watched" onClick={() => handleWatchedClick()}>
                                <img src={(!loading && watched) ? checkedBox : checkBox}></img>
                                <text>Watched</text>
                            </button>
                            <button className="rate" onClick={() => handleRateClick()}>
                                <img src={rate === -1 ? star : yellowStar}></img>
                                <text>{rate === -1 ? 'Rate' : rate}</text>
                            </button>
                            <button className="rating">
                                <img src={rateStar}></img>
                                <text>{!loading && averageRating.toPrecision(2)}/10 ({voteCount})</text>
                            </button>
                        </div>
                        {showRatingButtons && 
                        <div className='rating-buttons'>
                            {renderRatingButtons()}
                        </div>}
                    </div>
                </div>
                <div className="movie-images">
                    {renderMovieImages()}
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
                        <div className="names-text">{!loading && renderNames(movie.writers)}</div>
                    </div>
                    <div className='stars'>
                        <div className="h5-container">
                            <h5>Stars</h5>
                        </div>
                        <div className="names-text">{!loading && renderNames(movie.stars)}</div>
                    </div>
                    <div className="awards">
                        <div className="h5-container">
                            <h5>Providers</h5>
                        </div>
                        <div className="names-text">{!loading && renderNames(movie.providers)}</div>
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
                {reviews.length > 0 && <div className="reviews-container">
                    <h2>User Reviews</h2>
                    {renderReviews()}
                </div>}
            </div>
        </div>
    );
}

export default Movie;