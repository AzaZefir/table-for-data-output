import React, { Fragment } from "react";
import { useModalHook } from "../../../hooks/useModalHook";
import { ModalOfAllRow } from "../modalOfAllRow/ModalOffAllRow";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Typography } from "@mui/material";

const LikedInfoModal = ({ row }) => {
  const { open, handleClose, handleOpen, textColor, font } = useModalHook();

  return (
    <Fragment>
      <Typography
        onClick={handleOpen}
        sx={{ gap: "10px", color: textColor, fontFamily: font }}
      >
        <ThumbUpIcon />
        {row.vote_count}
      </Typography>
      <ModalOfAllRow handleClose={handleClose} open={open} selectedFilm={row} />
    </Fragment>
  );
};

export default LikedInfoModal;
