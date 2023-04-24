import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export const MovieView = ({ movies, user }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    fetch(
      `https://mymovieapp.herokuapp.com/users/favorites/${
        user.username
      }/${encodeURIComponent(movie.id)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        alert("Movie Added");
        window.location.reload();
      } else {
        alert("Failed to add");
      }
    });
  };

  return (
    <div>
      <div>
        <img src={movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button" style={{ cursor: "pointer" }}>
          Back
        </button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit" className="my-2">
          Like
        </Button>
      </Form>
    </div>
  );
};
