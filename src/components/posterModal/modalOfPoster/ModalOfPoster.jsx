import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ModalOfPoster = ({ open, handleClosePoster, selectedPoster }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClosePoster}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${selectedPoster?.backdrop_path}')`,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "90vh",
            cursor: "pointer",
          }}
        >
          <span
            className="material-icons"
            style={{
              position: "absolute",
              right: "20px",
              top: "20px",
              cursor: "pointer",
            }}
            onClick={handleClosePoster}
          >
            cancel
          </span>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalOfPoster;
