import { MovieRepository } from "../repositories/MovieRepository";

class MovieServiceClass {
  async getForYouMovies(userId: string) {
    const topUserReview = await MovieRepository.getTopUserReview(userId);
    
    if (!topUserReview) {
      const topRatedMovies = await this.getTopRatedMovies();
      return topRatedMovies;
    }
  
    const forYouMovies = await MovieRepository.getForYouMovies(topUserReview);

    const forYouMoviesCards = forYouMovies.map((movie: { id: string; title: string; poster_path: string; vote_average: number; }) => {
      // const movieRating = MovieReviewService.getMovieRating(movie.id);

      return {
        "id": movie.id,
        "title": movie.title,
        "poster_path": movie.poster_path,
        "rating": movie.vote_average
      }
    });

    return forYouMoviesCards;
  }

  async getTopRatedMovies() {
    const topRatedMovies = await MovieRepository.getTopRatedMovies();

    const topRatedMoviesCards = topRatedMovies.map((movie: { id: string; title: string; poster_path: string; vote_average: number; }) => {
      // const movieRating = MovieReviewService.getMovieRating(movie.id);

      return {
        "id": movie.id,
        "title": movie.title,
        "poster_path": movie.poster_path,
        "rating": movie.vote_average
      }
    });

    return topRatedMoviesCards;
  }

  async getNowPlayingMovies() {
    const nowPlayingMovies = await MovieRepository.getNowPlayingMovies();

    const nowPlayingMoviesCards = nowPlayingMovies.map((movie: { id: string; title: string; poster_path: string; vote_average: number; }) => {
      // const movieRating = MovieReviewService.getMovieRating(movie.id);
      
      return {
        "id": movie.id,
        "title": movie.title,
        "poster_path": movie.poster_path,
        "rating": movie.vote_average
      }
    });

    return nowPlayingMoviesCards;
  }

  async getMovieDetails(movieId: string) {
    const movieDetails = await MovieRepository.getMovieDetails(movieId);
    const movieCredits = await MovieRepository.getMovieCredits(movieId);
    const movieProviders = await MovieRepository.getMovieProviders(movieId);

    const actors = movieCredits.cast.filter((actor: { known_for_department: string }) => actor.known_for_department === "Acting");
    const stars = actors.slice(0, 5);

    const directors = movieCredits.crew.filter((crewMember: { known_for_department: string }) => crewMember.known_for_department === "Directing");
    const directorsNames = directors.map((director: { name: string }) => director.name);

    const writers = movieCredits.crew.filter((crewMember: { known_for_department: string }) => crewMember.known_for_department === "Writing");
    const writersNames = writers.map((writer: { name: string }) => writer.name);

    const providers = movieProviders.results.BR.flatrate.map((provider: { provider_name: string }) => provider.provider_name);

    const movieInfo = {
      "genres": movieDetails.genres.map((genre: { name: string }) => genre.name),
      "plot": movieDetails.overview,
      "rating": movieDetails.vote_average,
      "releaseDate": movieDetails.release_date,
      "backdrop": movieDetails.backdrop_path,
      "poster": movieDetails.poster_path,
      "runtime": movieDetails.runtime,
      "title": movieDetails.title,
      "stars": stars.map((actor: { name: string }) => actor.name),
      "director": directorsNames,
      "writers": writersNames,
      "providers": providers
    }

    return movieInfo;
  }
}

export const MovieService = new MovieServiceClass();