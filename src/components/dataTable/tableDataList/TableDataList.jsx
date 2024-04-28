import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { RatingStars } from "./../../ratings/Ratings";
import { Box, Typography } from "@mui/material";

const TableDataList = ({ film }) => {
  return (
    <TableRow
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${film.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundRepeat: "no-repeat",
        minHeight: 100,
        maxHeight: 300,
        cursor: "pointer",
      }}
    >
      <TableCell
        component="th"
        scope="row"
        align="center"
        sx={{ color: "#fff" }}
      >
        <figure
          style={{
            width: "160px",
            height: "240px",
            overflow: "hidden",
          }}
        >
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`}
            alt={film.title}
            style={{ width: "100%" }}
          />
        </figure>
      </TableCell>
      <TableCell align="left" sx={{ color: "#fff" }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2, mt: 3 }}>
          {film.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems:'center' }}>
          <RatingStars rating={film.vote_average} />(
          {film.original_language.toUpperCase()})
        </Box>

        {film.overview}
      </TableCell>
      <TableCell align="left" sx={{ color: "#fff" }}>
        {film.release_date}
      </TableCell>

      <TableCell align="left" sx={{ color: "#fff" }}>
        {film.vote_count}
      </TableCell>
    </TableRow>
  );
};

export default TableDataList;
