import { 
  startFetchMovieRatings,
  successFetchMovieRatings,
  errorFetchMovieRatings,
  startFetchMovieDetail,
  successFetchMovieDetail,
  errorFetchMovieDetail
 } from "../actions/movies";

const initialState = {
 isFetchingMovieRatings: false,
 isFetchingMovieDetail: false,
 isLoading: true,
 errorFetchingMovieDetail: null,
 errorFetchingMovieRatings: null,
 successFetchingMovieDetail: null,
 successFetchingMovieRatings: null,
 ratings: {},
 movieDetail: {},
};

const MoviesReducer = (state = initialState, action) => {
 switch (action.type) {
  case startFetchMovieRatings.toString():
    return {
      ...state,
      isLoading: false,
      isFetchingMovieRatings: true,
    };
  case successFetchMovieRatings.toString():
    return {
      ...state,
      isLoading: false,
      isFetchingMovieRatings: false,
      ratings: action.payload.data,
      successFetchMovieRatings: true,
      errorFetchMovieRatings: null,
    };
  case errorFetchMovieRatings.toString():
    return {
      ...state,
      isLoading: false,
      isFetchingMovieRatings: false,
      ratings: {},
      successFetchMovieRatings: false,
      errorFetchMovieRatings: action.payload.error
    };
  case startFetchMovieDetail.toString():
    return {
      ...state,
      isFetchingMovieDetail: true,
    };
  case successFetchMovieDetail.toString():
    return {
      ...state,
      successFetchMovieDetail: true,
      errorFetchMovieDetail: null,
      movieDetail: action.payload,
      isFetchingMovieDetail: false,
    };
  case errorFetchMovieDetail.toString():
    return {
      ...state,
      isFetchingMovieDetail: false,
      successFetchMovieDetail: false,
      errorFetchMovieDetail: action.payload.error,
      movieDetail: {},
    };
  default:
   return state;
 }
};

export default MoviesReducer;