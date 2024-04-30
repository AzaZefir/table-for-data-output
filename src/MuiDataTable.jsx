import React, { Fragment } from "react";

import SkeletonLoader from "./components/skeletonLoader/SkeletonLoader";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Theme from "./components/theme/Theme";
import { OpenPosterModal } from "./components/posterModal/OpenPosterModal";
import { DescriptionInfoModal } from "./components/commonInfoModal/descriptionModal/DescriptionInfoModal";
import { RatingInfoModal } from "./components/commonInfoModal/ratingModal/RatingModal";
import LikedInfoModal from "./components/commonInfoModal/likedModal/LikedInfoModal";
import { ReleaseInfoModal } from "./components/commonInfoModal/releaseModal/ReleaseModal";

const columns = [
  {
    field: "original_title",
    headerName: "Постер",
    width: 150,
    editable: false,
    renderCell: OpenPosterModal,
  },
  {
    field: "overview",
    headerName: "Описание",
    width: 400,
    editable: false,
    renderCell: DescriptionInfoModal,
  },
  {
    field: "vote_average",
    headerName: "Рейтинг",
    width: 300,
    editable: false,
    renderCell: RatingInfoModal,
  },
  {
    field: "vote_count",
    headerName: "Понравилось",
    type: "number",
    width: 170,
    editable: false,
    renderCell: LikedInfoModal,
  },
  {
    field: "release_date",
    headerName: "Дата выхода",
    type: "number",
    width: 200,
    editable: false,
    renderCell: ReleaseInfoModal,
  },
];

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
              marginBottom: "100px",
              marginTop: "20px",
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
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        )
      )}
    </Fragment>
  );
};
