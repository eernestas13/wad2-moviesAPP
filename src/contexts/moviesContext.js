/*
import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} ) 
    const [favorites, setFavorites] = useState( [] );
    const [watchlists, setWatchlists] = useState( [] );
   // const [similars, goToSimilarMovies] = useState( {} );
    
   /* const goSimilars = (movie) => {
      goToSimilarMovies([...similars,movie.id])
    }; 
    
   
  
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
        watchlists,
        //similars,
        //goSimilars,
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
*/



import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "load":
            return { movies: action.payload.result};
        default:
            return state;
    }
};

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} )
    const [favorites, setFavorites] = useState( [] )
    const [watchLists, setWatchList] = useState( [] )
    const [state, dispatch] = useReducer(reducer, { movies: []});
    const [authenticated, setAuthenticated] = useState(false);


    useEffect(() => {
        getMovies().then(result => {
            console.log(result);
            dispatch({ type: "load", payload: {result}});
        });
    },[]);



    const addToFavorites = (movie) => {
        setFavorites([...favorites,movie.id])
    };
    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
        setFavorites( favorites.filter(
            (mId) => mId !== movie.id
        ) )
    };

    const addToWatchlists = (movie) => {
        setWatchList([...watchLists,movie.id])
        console.log([...watchLists,movie.id]);
    };


    // We will use this function in a later section
    const removeFromWatchLists = (movie) => {
        setWatchList( watchLists.filter(
            (mId) => mId !== movie.id
        ) )
    };

    const addReview = (movie, review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
    };

    return (
        <MoviesContext.Provider
            value={{
                movies: state.movies,
                setAuthenticated,
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchlists,
                removeFromWatchLists
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
