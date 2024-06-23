import { AxiosError } from "axios";
import prisma from "../../../../libs/prisma";
import { Prisma } from '@prisma/client'
import api from "../services/api";

class MovieRepositoryClass {
  getTopUserReview(userId: string): any {
    return [{id: "1", userId: "1", movieId: "1", rating: 5, review: "Great movie!"}];
    // return prisma.movieReview.findFirst({
    //   where: {
    //     userId: userId
    //   }
    // });

  }

  async getForYouMovies(movieId: string) {
    const forYouMovies = await api.get(`/movie/${movieId}/recommendations`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    return forYouMovies;
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

    return topRatedMovies;
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

    return nowPlayingMovies;
  }

  async getMovieDetails(movieId: string) {
    const movieDetails = await api.get(`/movie/${movieId}`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    return movieDetails;
  }

  async getMovieCredits(movieId: string) {
    const movieCredits = await api.get(`/movie/${movieId}/credits`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    return movieCredits;
  }

  async getMovieProviders(movieId: string) {
    const movieProviders = await api.get(`/movie/${movieId}/watch/providers`).then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    return movieProviders;
  }
}

export const MovieRepository = new MovieRepositoryClass();