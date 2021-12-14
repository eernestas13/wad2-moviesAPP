import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from '../api/tmdb-api'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchlistsIcon from "../components/cardIcons/addToWatchlist";


const NowPlayingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('ladiscover', getNowPlayingMovies)

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

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 



  return (
    <PageTemplate
      title="Movies Playing Now"
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

export default NowPlayingMoviesPage;