import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToWatchlistsIcon from '../components/cardIcons/addToWatchlist'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


const TopRatedMovies = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('topdiscover', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const moviesUpcoming = data.results;
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlists = moviesUpcoming.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  const addToWatchlists = (movieId) => true 

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 


  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return (
            <>
              <AddToWatchlistsIcon movie={movie} />
              <AddToFavoritesIcon movie={movie} />
            </>
          );
        }}
    />
);
};



export default TopRatedMovies;