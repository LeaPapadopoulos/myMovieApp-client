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
