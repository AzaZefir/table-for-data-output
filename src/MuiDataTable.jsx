import React, { Fragment, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "./components/dataTable/tableHead/TableHeader";
import TableDataList from "./components/dataTable/tableDataList/TableDataList";
import SkeletonLoader from "./components/skeletonLoader/SkeletonLoader";
import SortData from "./components/dataTable/sort/SortData";
import FilterData from "./components/dataTable/filter/FilterData";
import { Box } from "@mui/material";

import Theme from "./components/dataTable/theme/Theme";
import { ModalOfAllRow } from "./components/dataTable/tableDataList/modalOfAllRow/ModalOffAllRow";
import ModalOfPoster from "./components/dataTable/tableDataList/modalOfPoster/ModalOfPoster";

export const MuiDataTable = ({
  loading,
  films,
  sortBy,
  setSortBy,
  filter,
  setFilter,
}) => {
  const [open, setOpen] = useState(false);
  const [openPoster, setOpenPoster] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handleOpen = (film) => {
    setOpen(true);
    setSelectedFilm(film);
  };

  const handleOpenPoster = (film) => {
    setOpenPoster(true);
    setSelectedPoster(film);
  };

  const handleClose = () => setOpen(false);
  const handleClosePoster = () => setOpenPoster(false);

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          "@media (max-width: 576px)": {
            flexDirection: "column",
          },
        }}
      >
        <SortData sortBy={sortBy} setSortBy={setSortBy} />
        <FilterData filter={filter} setFilter={setFilter} />
        <Theme />
      </Box>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <TableContainer component={Paper} sx={{ mb: 4, mt: 4 }}>
          <Table aria-label="simple table">
            <TableHeader />
            <TableBody>
              {films.results.map((film, index) => (
                <TableDataList
                  film={film}
                  key={`${film.id}_${index}`}
                  handleOpen={handleOpen}
                  handleOpenPoster={handleOpenPoster}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <ModalOfAllRow
        open={open}
        handleClose={handleClose}
        selectedFilm={selectedFilm}
      />
      <ModalOfPoster
        handleClosePoster={handleClosePoster}
        openPoster={openPoster}
        selectedPoster={selectedPoster}
      />
    </Fragment>
  );
};
