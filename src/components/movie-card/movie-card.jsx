import PropTypes from "prop-types";
export const MovieCard = ({ movie, onBookClick }) => {
  return (
    <div
      onClick={() => {
        onBookClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    //image: PropTypes.string.isRequired,
    director: PropTypes.string,
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
