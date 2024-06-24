import { CardProps } from '../types/CardProps';
import api from './api';

export const getRecommendedMovies = async () => {
  try {
    const response = await api.get('/movies/recommended/') as CardProps[];
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }

};

export const getTopRatedMovies = async () => {
  try {
    const response = await api.get('/movies/top-rated/') as CardProps[];
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await api.get('/movies/now-playing/') as CardProps[];
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
};

export const getWatchedMovie = async (id: string) => {
  try {
    const response = await api.post(`/movies/${id}/watched`);
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}

export const getMovieRating = async (id: string) => {
  try {
    const response = await api.get(`/movies/${id}/rating`);
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}

export const getMovieAverageRating = async (id: string) => {
  try {
    const response = await api.get(`/movies/${id}/average-rating`);
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}

export const getMovieDetails = async (id: string) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}

export const createRating = async (id: string, rating: number) => {
  try {
    const response = await api.post(`/movies/${id}/rating`, { rating });
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}

export const watchedMovie = async (id: string) => {
  try {
    const response = await api.post(`/movies/${id}/watched`);
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}

export const createReview = async (id: string, review: string) => {
  try {
    const response = await api.post(`/movies/${id}/review`, { review });
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}

export const getReviews = async (id: string) => {
  try {
    const response = await api.get(`/movies/${id}/reviews`);
    return response;
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
}