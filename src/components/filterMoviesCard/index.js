import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import img from '../../images/download.png'
import { getGenres, getMovies2 } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(204, 204, 204)",
  },
  media: { height: 495 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  //const { data2 } = useQuery("movies", getMovies2);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  //const movies = data2.movies;
  
  genres.unshift({ id: "0", name: "All" });
  //movies.unshift({ id: "All", name: "All" });

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleSortMovie = (e, props) => {
    handleChange(e, "movie", e.target.value);
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="medium" />
          <strong>  Filter Movies</strong>
        </Typography>
        <TextField
      className={classes.formControl}
      id="filled-search"
      label="Search..."
      type="search"
      value={props.titleFilter}
      variant="filled"
      onChange={handleTextChange}
    />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre:</InputLabel>
          <Select
      labelId="genre-label"
      id="genre-select"
      value={props.genreFilter}
      onChange={handleGenreChange}
    >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        
      </CardContent>
      <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
         
          
        </Typography>
      </CardContent>
    </Card>
  );
}

//Attempt at implementing a Sort Button
/*
<FormControl className={classes.formControl}>
          <Button id="sort movies">Sort</Button>
          <Select
      labelId="sort movies"
      id="sort movies"
      value={props.sortMovie}
      onChange={handleSortMovie}
    >
            {movies.sort((movie) => {
              return (
                
                  {movie}
                
              );
            })}
          </Select>
        </FormControl>
*/