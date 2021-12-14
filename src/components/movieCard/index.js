import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
//import LocalMoviesIcon from '../components/cardIcons/similarMovies';


const useStyles = makeStyles({
  card: { maxWidth: 345, maxHeight: 800 }, "&:hover": {display: "inline-block"},
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(204, 204, 204)",
  },
  avatar2: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  avatar3: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function MovieCard({ movie, action }) {
  const classes = useStyles();
  const { favorites, addToFavorites } = useContext(MoviesContext);
  const { watchlists, addToWatchlists} = useContext(MoviesContext);
  const { similars, goSimilars} = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  /*
  if (similars.find((id) => id === movie.id2)) {
    movie.similars = true;
  } else {
    movie.similars = false
  }
  */
  

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToWatchlist= (e) => {
    e.preventDefault();
    addToWatchlists(movie);
  };

  const handleSimilarMovies= (e) => {
    e.preventDefault();
    goSimilars(movie);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        movie.favorite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      avatar2={
        movie.watchlist ? (
          <Avatar className={classes.avatar2}>
            <PlaylistAddIcon />
          </Avatar>
        ) : null
      }
      avatar3={
        movie.similar ? (
          <Avatar className={classes.avatar3}>
            <LocalMoviesIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="medium" />
              {" "}{movie.release_date}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="medium" />
              {"Rating: "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions >
        {action(movie)}

          

        <Link to={`/movies/${movie.id}`}>
          <Button variant="contained" size="small" color="Black">
            More Info
          </Button>
        </Link>
        <Link to={`/similar/${movie.id}/`}>
          <Button variant="contained" size="small" color="Black">
            Similar Movies
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}