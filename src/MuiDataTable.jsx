import React, { Fragment } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "./components/dataTable/tableHead/TableHeader";
import TableDataList from "./components/dataTable/tableDataList/TableDataList";
import SkeletonLoader from "./components/skeletonLoader/SkeletonLoader";

export const MuiDataTable = ({ loading, films }) => {
  return (
    <Fragment>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <TableContainer component={Paper} sx={{ mb: 4, mt: 4 }}>
          <Table aria-label="simple table">
            <TableHeader />
            <TableBody>
              {films.results.map((film, index) => (
                <TableDataList film={film} key={`${film.id}_${index}`} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Fragment>
  );
};
