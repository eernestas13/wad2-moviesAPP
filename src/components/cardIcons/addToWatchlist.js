import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const AddToWatchlistsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlists = (e) => {
    e.preventDefault();
    context.addToWatchlists(movie);
  };
  return (
    <IconButton aria-label="add to watchlists" onClick={handleAddToWatchlists}>
      <PlaylistAddIcon color="Black" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistsIcon;