import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToWatchlistsIcon from '../components/cardIcons/addToWatchlist'



const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('newdiscover', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const moviesUpcoming = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlists = moviesUpcoming.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  const addToWatchlists = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={moviesUpcoming}
      action={(movie) => {
        return <AddToWatchlistsIcon movie={movie} />
      }}
    />
);
};



export default UpcomingMoviesPage;