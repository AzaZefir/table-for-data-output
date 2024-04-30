import React, { Fragment } from "react";

import SkeletonLoader from "./components/skeletonLoader/SkeletonLoader";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Theme from "./components/theme/Theme";
import { columns } from "./consts/columnsData";

export const MuiDataTable = ({ loading, films }) => {
  return (
    <Fragment>
      <Theme />

      {loading ? (
        <SkeletonLoader />
      ) : (
        films && (
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              paddingBottom: "100px",
              paddingTop: "20px",
            }}
          >
            <DataGrid
              rows={films.results}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              getRowHeight={() => "auto"}
              sx={{
                "& .MuiDataGrid-cellContent": {
                  minHeight: 100,
                  maxHeight: 300,
                },
              }}
              pageSizeOptions={[10]}
              disableRowSelectionOnClick
            />
          </Box>
        )
      )}
    </Fragment>
  );
};
