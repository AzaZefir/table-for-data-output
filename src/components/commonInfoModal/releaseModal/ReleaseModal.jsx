import React, { Fragment } from "react";
import { ModalOfAllRow } from "../modalOfAllRow/ModalOffAllRow";
import { Typography } from "@mui/material";
import { useModalHook } from "../../../hooks/useModalHook";

export const ReleaseInfoModal = ({ row }) => {
  const { open, handleClose, handleOpen, textColor, font } = useModalHook();

  return (
    <Fragment>
      <Typography
        sx={{ color: textColor, fontFamily: font }}
        onClick={handleOpen}
      >
        {row.release_date}
      </Typography>
      <ModalOfAllRow handleClose={handleClose} open={open} selectedFilm={row} />
    </Fragment>
  );
};
