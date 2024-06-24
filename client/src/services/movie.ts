import { CardProps } from '../types/CardProps';
import { MovieProps } from '../types/MovieProps';
import api from './api';

export const getRecommendedMovies = async () => {
  try {
    const response = await api.get('/movies/for-you/');
    return response.data as CardProps[];
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }

};

export const getTopRatedMovies = async () => {
  try {
    const response = await api.get('/movies/top-rated/');
    return response.data as CardProps[];
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await api.get('/movies/now-playing/');
    return response.data as CardProps[];
  } catch (error) {
    console.error('Error fetching movies data:', error);
    throw error;
  }
};

export const getMovieByName = async (movieName: string) => {
    try {
        console.log("Chegou aqui")
        const response = await api.get(`/movies/search/${movieName}`);
        return response;
    } catch (error) {
        console.error('Error fetching movies data:', error);
        throw error;
    }
}