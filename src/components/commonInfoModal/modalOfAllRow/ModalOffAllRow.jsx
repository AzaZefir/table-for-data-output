import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RatingStars } from "../../ratings/Ratings";
import { Box } from "@mui/material";

export const ModalOfAllRow = ({ open, handleClose, selectedFilm }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${selectedFilm.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundRepeat: "no-repeat",
            border: "none",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            sx={{ color: "#fff" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {selectedFilm?.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "#fff" }}
          >
            {selectedFilm?.overview}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "#fff" }}
          >
            Дата выхода: {selectedFilm?.release_date}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "#fff" }}
          >
            Просмотрено: {selectedFilm?.vote_count}
          </Typography>
          <Box
            id="modal-modal-description"
            sx={{ mt: 2, display: "flex", color: "#fff" }}
          >
            Рейтинг: <RatingStars rating={selectedFilm?.vote_average} />
          </Box>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "#fff" }}
          >
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
