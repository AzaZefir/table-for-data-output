import React, { Fragment } from "react";
import { ModalOfAllRow } from "../modalOfAllRow/ModalOffAllRow";
import { useModalHook } from "../../../hooks/useModalHook";
import { RatingStars } from "../../ratings/Ratings";

export const RatingInfoModal = ({ row }) => {
  const { open, handleClose, handleOpen } = useModalHook();
  return (
    <Fragment>
      <RatingStars handleOpen={handleOpen} rating={row.vote_average} />
      <ModalOfAllRow handleClose={handleClose} open={open} selectedFilm={row} />
    </Fragment>
  );
};
