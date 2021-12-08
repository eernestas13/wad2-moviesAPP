import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} ) 
    const [favorites, setFavorites] = useState( [] );
    const [watchlists, setWatchlists] = useState( [] );
    
  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };

  const addToWatchlists = (movie) => {
    setWatchlists([...watchlists,movie.id])
  };

  const removeFromWatchlists = (movie) => {
    setWatchlists( watchlists.filter(
      (mId) => mId !== movie.id
    ) )
  };
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        addToWatchlists,
        removeFromFavorites,
        removeFromWatchlists,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;