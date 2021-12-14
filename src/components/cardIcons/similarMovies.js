import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import { Link } from "react-router-dom";

//Attempt at impleneting Sort Button

const SimilarMoviesIcon = ({ movie }) => {
    /*
  const context = useContext(MoviesContext);

  const handleSimilarMovies = (e) => {
    e.preventDefault();
    context.goSimilars(movie);
  };

 return (
    <IconButton aria-label="go to similar movies" onClick={handleSimilarMovies}>
      <LocalMoviesIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

  */

return (
    <Link
      to={{
        pathname: `/:id/similar`,
        state: {
          movieId: movie.id,
        },
      }}
    >
      <LocalMoviesIcon color="primary" fontSize="large" />
    </Link>
  );
};
  
/*

const SimilarMoviesIcon = ({ movie }) => {
    return (
      <Link
        to={{
          pathname: `/pages/similarMoviesPage`,
          state: {
            movieId: movie.id,
          },
        }}
      >
        <LocalMoviesIcon color="primary" fontSize="large" />
      </Link>
    );
  };
  */

export default SimilarMoviesIcon;