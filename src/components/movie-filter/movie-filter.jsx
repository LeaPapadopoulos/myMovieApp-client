import { Dropdown, DropdownButton, Link, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieFilter = ({ movies, genre }) => {
  // Create a Set of unique genres
  const uniqueGenres = new Set(movies.map((movie) => movie.genre));
  // Convert the Set back to an array
  const genres = Array.from(uniqueGenres);

  return (
    <div className="my-2">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {genre ? genre : "All Genre"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item key="All Genre" as={Link} to={`/`}>
            All Genre
          </Dropdown.Item>
          {genres.map((genres) => (
            <Dropdown.Item
              key={genres}
              data-genre={genres}
              as={Link}
              to={`/movies/genre/${genres}`}
            >
              {genres}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
