import { useParams } from "react-router";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../movie-card/movie-card";
import { MovieFilter } from "../movie-filter/movie-filter";

export const GenreView = ({ movies, user }) => {
  const { genre } = useParams();
  let genreMovies = movies.filter((movie) => movie.genre === genre);

  return (
    <div>
      <MovieFilter movies={movies} genre={genre}/>

      {genreMovies.map((movie) => (
        <Col key={movie.id} md={3} className="pb-2">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </div>
  );
};
