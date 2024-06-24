import { AxiosError } from "axios";
import api from "./api";
import prisma from "../../../../libs/prisma";
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

    let providers = [];

    if (movieProviders.results.BR) {
      providers = movieProviders.results.BR.flatrate.map((provider: { provider_name: string }) => provider.provider_name);
    }

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
      "director": directorsNames[0],
      "writers": writersNames,
      "providers": providers
    }

    return movieInfo;
  }

  async createRating(id: string, rating: number, userId: string) {
    const existentRating = await prisma.rating.findFirst({
      where: {
        movieId: id,
        userId: userId
      }
    });

    if (existentRating) {
      await prisma.rating.update({
        where: {
          id: existentRating.id
        },
        data: {
          watched: true,
          rating: rating
        }
      });

      return existentRating;
    }

    const createdRating = await prisma.rating.create({
      data: {
        watched: true,
        rating: rating,
        movieId: id,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });

    return createdRating;
  }

  async getRating(userId: string, movieId: string) {
    const rating = await prisma.rating.findFirst({
      where: {
        movieId: movieId,
        userId: userId
      }
    });

    if (rating.rating === null) {
      return -1;
    }

    return rating.rating;
  }


  async getAverageRating(id: string) {
    const rating = await MovieRepository.getMovieDetails(id);

    const apiRating = rating.vote_average;

    const ratings = await prisma.rating.findMany({
      where: {
        movieId: id,
        rating: {
          not: null
        }
      }
    });
    
    if (ratings.length === 0) {
      return {
        "average": apiRating,
        "count": rating.vote_count
      };
    }

    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0); 

    const average = (sum + (apiRating * rating.vote_count)) / (ratings.length + rating.vote_count);

    const ratingObject = {
      "average": average,
      "count": ratings.length + rating.vote_count
    }

    return ratingObject;
  }

  async createReview(id: string, review: string, userId: string) {
    const existentRating = await prisma.rating.findFirst({
      where: {
        movieId: id,
        userId: userId
      }
    });

    if (existentRating) {
      await prisma.rating.update({
        where: {
          id: existentRating.id
        },
        data: {
          review: review
        }
      });

      return existentRating;
    }

    const createdRating = await prisma.rating.create({
      data: {
        review: review,
        movieId: id,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });

    return createdRating;
  }

  async getReviews(id: string) {
    const reviews = await prisma.rating.findMany({
      where: {
        movieId: id,
        review  : {
          not: null
        }
      },
      select: {
        review: true,
        user: {
          select: {
            name: true
          }
        }
      } 
    });

    return reviews;
  }

  async watchedMovie(id: string, userId: string) {
    const existentRating = await prisma.rating.findFirst({
      where: {
        movieId: id,
        userId: userId
      }
    });

    if (existentRating) {
      await prisma.rating.update({
        where: {
          id: existentRating.id
        },
        data: {
          watched: !existentRating.watched
        }
      });

      return existentRating;
    }

    const createdRating = await prisma.rating.create({
      data: {
        watched: true,
        movieId: id,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });

    return createdRating;
  }

  async getWatchedMovie(userId: string, movieId: string) {
    const watchedMovie = await prisma.rating.findFirst({
      where: {
        movieId: movieId,
        userId: userId
      }
    });

    if (!watchedMovie) {
      return false;
    }

    return watchedMovie.watched;
  }

}

export const MovieService = new MovieServiceClass();