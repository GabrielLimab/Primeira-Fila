import { AxiosError } from "axios";
import prisma from "../../../../libs/prisma";
import api from "../../movies/repositories/MovieAPI";

class RatingServiceClass {
  async createRating(movieId: string, userId: string, rating?: number, watched?: boolean, review?: string) {
    const existentRating = await prisma.rating.findFirst({
      where: {
        movieId: movieId,
        userId: userId
      }
    });

    if (existentRating) {
      await prisma.rating.update({
        where: {
          id: existentRating.id
        },
        data: {
          rating: rating,
          watched: watched,
          review: review
        }
      });

      return existentRating;
    }

    const createdRating = await prisma.rating.create({
      data: {
        rating: rating,
        movieId: movieId,
        user: {
          connect: {
            id: userId
          }
        },
        watched: watched,
        review: review
      }
    });

    return createdRating;
  }

  async getUserRating(movieId: string, userId: string) {
    const rating = await prisma.rating.findFirst({
      where: {
        movieId: movieId,
        userId: userId
      }
    });

    return rating;
  }

  async getUserTopRatedMovie(userId: string) {
    const topRating = await prisma.rating.findFirst({
      where: {
        userId: userId,
        rating: {
          not: null
        }
      },
      orderBy: {
        rating: 'desc'
      }
    });

    return topRating;
  }
  
  async getRating(movieId: string) {
    const rating = await api.get(`/movie/${movieId}`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    const apiRating = rating.vote_average;

    const ratings = await prisma.rating.findMany({
      where: {
        movieId: movieId,
        rating: {
          not: null
        }
      }
    });
    
    if (ratings.length === 0) {
      return apiRating;
    }

    const sum = ratings.reduce((acc, rating) => acc + (rating.rating || 0), 0); 

    const average = (sum + apiRating) / (ratings.length + 1);

    return average;
  }

  async getReviews(movieId: string) {
    const reviews = await prisma.rating.findMany({
      where: {
        movieId: movieId,
        review: {
          not: null
        }
      }
    });

    return reviews;
  }

  async getWatched(movieId: string) {
    const watchedMovies = await prisma.rating.findMany({
      where: {
        movieId: movieId,
        watched: true
      }
    });

    return watchedMovies;
  }
}
export const RatingService = new RatingServiceClass();

