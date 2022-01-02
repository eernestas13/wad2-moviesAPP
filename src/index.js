import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import WatchlistMoviesPage from "./pages/watchlistMoviePage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from "./pages/topratedMoviesPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMoviesPage from "./pages/popularMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import AuthenticatePage from "./pages/authenticatePage";
import SignupPage from "./pages/signupPage";
//import { AuthProvider } from "./contexts/authContext";
import  AuthProvider  from "./contexts/authContext";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./components/privateRoute";
import AuthHeader from "./contexts/authHeader";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthProvider>
      <AuthHeader/>
      <SiteHeader />      {/* New Header  */}
      <MoviesContextProvider>
            {" "}
      <Switch>
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route exact path="/movies/popular" component={PopularMoviesPage} />
        <Route exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
        <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
        
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />

        <Route path="/movies/:id" component={MoviePage} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
        <Route path="/similar/:id" component={SimilarMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
      </Switch>
      </MoviesContextProvider>
      </AuthProvider>

    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
};
//<PrivateRoute exact path="/" component={HomePage} />

ReactDOM.render(<App />, document.getElementById("root"));