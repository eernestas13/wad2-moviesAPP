import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getSimilarMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToWatchlistsIcon from '../components/cardIcons/addToWatchlist'
import { withRouter } from "react-router-dom";
import SimilarMovies from "../components/similarMovies";
//import express from 'express';


//const router = express.Router(); 

const SimilarMoviesPage = (props) => {
const { id } = props.match.params

  const {  data: movie, error, isLoading, isError }  = useQuery(['simdiscover',{id: id}], getSimilarMovies)
/*
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getSimilarMovies
  );
*/

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 
/*
  router.get('/:id/similar'( (req, res) => {
    const id = parseInt(req.params.id);
    const movie = (id);
    if (movie) {
        res.status(200).json(movie);
    } 
    
}));
*/
  /* 
  const moviesSimilar = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlists = moviesSimilar.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  const addToWatchlists = (movieId) => true 
*/

/*
  return (
    <PageTemplate
      title="Similar Movies"
      movies={movie}
      action={(movie) => {
        return <AddToWatchlistsIcon movie={movie} />
      }}
    />
);
};
*/
/*
return (
    <>
      {movie ? (
        <>
          <PageTemplate
      title="Similar Movies"
      movies={movie}
      action={(movie) => {
        return <AddToWatchlistsIcon movie={movie} />
      }}
    />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};
*/
return (
    <>
      {movie ? (
        <>
          <PageTemplate 
          title="Similar Movies"
          movies={movie}>
            
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

/*
*/
/*
const SimilarMoviesPage = (props) => {
    const {movie, similar} = props.location.state
    return (
      <PageTemplate movie={movie}>
        <SimilarMovies movie={similar} />
      </PageTemplate>
    );
  };
*/

export default SimilarMoviesPage;
//export default withRouter(SimilarMoviesPage);