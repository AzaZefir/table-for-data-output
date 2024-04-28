import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RatingStars } from "../../../ratings/Ratings";
import { Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export const ModalOfAllRow = ({ open, handleClose, selectedFilm }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedFilm?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedFilm?.overview}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Дата выхода: {selectedFilm?.release_date}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Просмотрено: {selectedFilm?.vote_count}
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2, display: "flex" }}>
            Рейтинг: <RatingStars rating={selectedFilm?.vote_average} />
          </Box>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Страна: ({selectedFilm?.original_language.toUpperCase()})
          </Typography>
          <span
            className="material-icons"
            style={{
              position: "absolute",
              right: "20px",
              top: "20px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            cancel
          </span>
        </Box>
      </Modal>
    </div>
  );
};
