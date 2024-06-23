import { AxiosError } from "axios";
import api from "./api";
import { MovieRepository } from "../repositories/MovieRepository";

class MovieServiceClass {
  async getForYouMovies(userId: string) {
    const topUserReview = MovieRepository.getTopUserReview(userId);
    
    if (!topUserReview) {
      const topRatedMovies = await this.getTopRatedMovies();
      return topRatedMovies;
    }
  
    const forYouMovies = await api.get(`/movie/${topUserReview}/recommendations`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

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
    const topRatedMovies = await api.get('/movie/top_rated?language=pt-BR').then(
      (response) => {
        return response.data.results;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

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
    const nowPlayingMovies = await api.get('/movie/now_playing?language=pt-BR').then(
      (response) => {
        return response.data.results;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

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

  async getMovieDetails(id: string) {
    const movieDetails = await api.get(`/movie/${id}`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    const movieCredits = await api.get(`/movie/${id}/credits`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    const movieProviders = await api.get(`/movie/${id}/watch/providers`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

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