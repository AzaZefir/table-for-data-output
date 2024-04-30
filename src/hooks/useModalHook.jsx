import { useState } from "react";
import { getRandomColor } from "../helper/getRandomColor";
import { getRandomFont } from "../helper/getRandomFontFamily";

export const useModalHook = () => {
  const [open, setOpen] = useState(false);
  const textColor = getRandomColor();
  const font = getRandomFont();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { open, setOpen, handleClose, handleOpen, textColor, font };
};
