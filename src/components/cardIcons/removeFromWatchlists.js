import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchlistsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchlists = (e) => {
    e.preventDefault();
    context.removeFromWatchlists(movie);
  };
  return (
    <IconButton
      aria-label="remove from watchlists"
      onClick={handleRemoveFromWatchlists}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchlistsIcon;