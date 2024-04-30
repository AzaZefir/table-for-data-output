import React, { Fragment, useState } from "react";
import { Box } from "@mui/material";
import ModalOfPoster from "./modalOfPoster/ModalOfPoster";

export const OpenPosterModal = ({ row }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Box onClick={handleOpen} sx={{ cursor: "pointer" }}>
        <img
          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${row.poster_path}`}
          alt={row.title}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <ModalOfPoster
        handleClosePoster={handleClose}
        open={open}
        selectedPoster={row}
      />
    </Fragment>
  );
};
