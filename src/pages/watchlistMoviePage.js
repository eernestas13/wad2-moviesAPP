import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatchlists from "../components/cardIcons/removeFromWatchlists";
import WriteReview from "../components/cardIcons/writeReview";

const WatchlistMoviesPage = () => {
  const {watchlists: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const watchlistMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["Wmovie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = watchlistMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = watchlistMovieQueries.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="Watchlist Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatchlists movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WatchlistMoviesPage;