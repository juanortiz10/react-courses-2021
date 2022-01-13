import { createAction } from "@reduxjs/toolkit";

// Importar actions de slices, solo para cuestiones demostrativas
import {
 startFetchMovieRatings as startFetchMovieRatingsSlice,
 successFetchMovieRatings as successFetchMovieRatingsSlice,
 errorFetchMovieRatings as errorFetchMovieRatingsSlice,
 startFetchMovieDetail as startFetchMovieDetailSlice,
 successFetchMovieDetail as successFetchMovieDetailSlice,
 errorFetchMovieDetail as errorFetchMovieDetailSlice,
} from "../slices/movies";

const BASE_URL = "https://imdb8.p.rapidapi.com/title";
const headers = {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "c3e14d75a3msh2a179812f3c3fb8p1d23b4jsn88ced071135a",
};

export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async (dispatch) => {
 try {
  // dispatch(startFetchMovieRatings());
  dispatch(startFetchMovieRatingsSlice());

  const response = await fetch(`${BASE_URL}/get-ratings?tconst=${movieId}`, { headers });
  const data = await response.json();
  
  dispatch(successFetchMovieRatingsSlice({ data }));
  // dispatch(successFetchMovieRatings({ data }));
 } catch (error) {
  // dispatch(errorFetchMovieRatings({ error }));
  dispatch(errorFetchMovieRatingsSlice({ error }));
 }
};

export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetail = createAction('SUCCESS_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');

export const fetchMovieDetail = (movieId) => async (dispatch) => {
 try {
  // dispatch(startFetchMovieDetail());
  dispatch(startFetchMovieDetailSlice());

  const overviewDetailsResponse = await fetch(`${BASE_URL}/get-overview-details?tconst=${movieId}`, { headers });
  const overviewDetailsData = await overviewDetailsResponse.json();

  const topCastResponse = await fetch(`${BASE_URL}/get-top-cast?tconst=${movieId}`, { headers });
  const topCastData = await topCastResponse.json();

  const detailsResponse = await fetch(`${BASE_URL}/get-details?tconst=${movieId}`, { headers });
  const detailsData = await detailsResponse.json();

  const fullCreditsResponse = await fetch(`${BASE_URL}/get-full-credits?tconst=${movieId}`, { headers });
  const fullCreditsData = await fullCreditsResponse.json();

  dispatch(successFetchMovieDetailSlice({
   overview: overviewDetailsData,
   topCast: topCastData,
   details: detailsData,
   fullCredits: fullCreditsData,
  }));
  /* dispatch(successFetchMovieDetail({
   overview: overviewDetailsData,
   topCast: topCastData,
   details: detailsData,
   fullCredits: fullCreditsData,
  })); */
 } catch (error) {
  // dispatch(errorFetchMovieDetail({ error }));
  dispatch(errorFetchMovieDetailSlice({ error }));
 }
};