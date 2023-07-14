import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const MovieCard = ({ movie, user, setUser }) => {
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    fetch(
      `https://mymovieapp.herokuapp.com/users/favorites/${
        user.username
      }/${encodeURIComponent(movie.id)}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        user.FavoriteMovies = user.FavoriteMovies.filter((movieID) => {
          return movieID !== movie.id;
        });
        setUser(user);
        console.log(user.FavoriteMovies);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
        alert("Movie Deleted");
      } else {
        alert("Failed to delete");
      }
    });
  };

  // Check if the current URL is "/profile"
  const isProfilePage = location.pathname === "/profile";

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <Button variant="outline-dark">Open</Button>
          </Link>

          {/* Conditionally render the Form component */}
          {isProfilePage && (
            <Form onSubmit={handleSubmit} className="mx-2">
              <Button variant="primary" type="submit" className="my-2">
                Delete
              </Button>
            </Form>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    director: PropTypes.string,
  }).isRequired,
};
