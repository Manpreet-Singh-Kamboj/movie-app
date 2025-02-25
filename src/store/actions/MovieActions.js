import axios from "../../utils/axios";
import { setMovieInfo } from "../slices/MovieSlice";

export const loadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const responses = await Promise.all([
        axios.get(`/movie/${id}/external_ids`),
        axios.get(`/movie/${id}`),
        axios.get(`/movie/${id}/watch/providers`),
        axios.get(`/movie/${id}/similar`),
        axios.get(`/movie/${id}/recommendations`),
      ]);
      const externalIds = responses[0].data;
      const movieDetails = responses[1].data;
      const watchProviders = responses[2].data.results;
      const similarMovies = responses[3].data.results;
      const recommendations = responses[4].data.results;
      const ultimateMovieDetails = {
        externalIds,
        movieDetails,
        watchProviders,
        similarMovies,
        recommendations,
      };
      dispatch(setMovieInfo(ultimateMovieDetails));
    } catch (error) {
      console.error("Error fetching movie details: ", error.message);
    }
  };
};
