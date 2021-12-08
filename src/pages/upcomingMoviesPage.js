import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

/*
const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]); //useState
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};
*/

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const moviesUpcoming = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = moviesUpcoming.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={moviesUpcoming}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};



export default UpcomingMoviesPage;