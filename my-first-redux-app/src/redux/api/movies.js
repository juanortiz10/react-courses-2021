import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
 "x-rapidapi-host": "imdb8.p.rapidapi.com",
 "x-rapidapi-key": "c3e14d75a3msh2a179812f3c3fb8p1d23b4jsn88ced071135a"
};

export const moviesApi = createApi({
 reducerPath: 'moviesApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb8.p.rapidapi.com' }),
 endpoints: (builder) => ({
  fetchMovies: builder.query({
   query: (title) => ({
    url: `/title/find?q=${title}`,
    method: 'GET',
    headers
   })
  }),
 })
});

export const { useFetchMoviesQuery } = moviesApi;