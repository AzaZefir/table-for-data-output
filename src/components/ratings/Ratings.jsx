import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
export const RatingStars = ({ rating, handleOpen }) => {
  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(rating);

    for (let i = 1; i <= 10; i++) {
      if (i <= roundedRating) {
        stars.push(<StarIcon key={i} color="primary" />);
      } else {
        stars.push(<StarIcon key={i} />);
      }
    }

    return stars;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={handleOpen}
    >
      {renderStars().map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </Box>
  );
};
