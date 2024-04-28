import StarIcon from "@mui/icons-material/Star";
export const RatingStars = ({ rating }) => {
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
    <div>
      {renderStars().map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};
