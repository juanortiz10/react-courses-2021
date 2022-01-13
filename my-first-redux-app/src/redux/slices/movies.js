import { createSlice } from "@reduxjs/toolkit";

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

const moviesSlice = createSlice({
 name: 'movies-slice',
 initialState,
 reducers: {
  startFetchMovieRatings(state, action) {
   state.isLoading = false;
   state.isFetchingMovieRatings = true;
  },
  successFetchMovieRatings(state, action) {
   state.isLoading = false;
   state.isFetchingMovieRatings = false;
   state.ratings = action.payload.data;
   state.successFetchMovieRatings = true;
   state.errorFetchMovieRatings = null;
  },
  errorFetchMovieRatings(state, action) {
   state.isLoading = false;
   state.isFetchingMovieRatings = false;
   state.ratings = {};
   state.successFetchMovieRatings = false;
   state.errorFetchMovieRatings = action.payload.error;
  },
  startFetchMovieDetail(state, action) {
   state.isFetchingMovieDetail = true;
  },
  successFetchMovieDetail(state, action) {
   state.successFetchMovieDetail = true;
   state.errorFetchMovieDetail = null;
   state.movieDetail = action.payload;
   state.isFetchingMovieDetail = false;
  },
  errorFetchMovieDetail(state, action) {
   state.isFetchingMovieDetail = false;
   state.successFetchMovieDetail = false;
   state.errorFetchMovieDetail = action.payload.error;
   state.movieDetail = {};
  },
 }
});

const { actions, reducer } = moviesSlice;

const {
 startFetchMovieRatings,
 successFetchMovieRatings,
 errorFetchMovieRatings,
 startFetchMovieDetail,
 successFetchMovieDetail,
 errorFetchMovieDetail,
} = actions;

export {  
 startFetchMovieRatings,
 successFetchMovieRatings,
 errorFetchMovieRatings,
 startFetchMovieDetail,
 successFetchMovieDetail,
 errorFetchMovieDetail 
};

export default reducer;