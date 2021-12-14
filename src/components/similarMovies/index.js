import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function SimilarMovies({ movie }) {
  const classes = useStyles();
  const [similars, setSimilars] = useState([]);

  

  useEffect(() => {
    getSimilarMovies(movie.id).then((similars) => {
      setSimilars(similars);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {similars.map((s) => (
            <TableRow key={s.id}>
              <TableCell component="th" scope="row">
                {s.author}
              </TableCell>
              <TableCell >{excerpt(s.content)}</TableCell>
              <TableCell >
                <Link
                  to={{
                    pathname: `/similar/${s.id}`,
                    state: {
                      review: s,
                      movie: movie,
                    },
                  }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}