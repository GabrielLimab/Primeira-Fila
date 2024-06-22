import { AxiosError } from "axios";
import api from "./api";

class MovieServiceClass {
  async getTrendingMovies() {
    const trendingMovies = await api.get('/trending/movie/week').then(
      (response) => {
        return response.data;
      }
    ).catch(
      (error: AxiosError) => {
        if (error.response) {
          throw error.response.data;
        }
    });

    return trendingMovies;
  }

}

export const MovieService = new MovieServiceClass();