import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getPopularMovies } from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchlistsIcon from "../components/cardIcons/addToWatchlist";


const PopularMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popdiscover', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const moviesUpcoming = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  // Redundant, but necessary to avoid app crashing.
  const watchlists = moviesUpcoming.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  const addToWatchlists = (movieId) => true 


  return (
    <PageTemplate
      title="Popular Movies"
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

export default PopularMoviesPage;