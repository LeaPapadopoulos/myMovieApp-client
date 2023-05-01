import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, movies }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    fetch(`https://mymovieapp.herokuapp.com/users/${user.username}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        alert("User deleted");
        window.location.reload();
      } else {
        alert("Delete failed");
      }
    });
  };

  let favoriteMovies = movies.filter((m) => user.FavoriteMovies.includes(m.id));

  return (
    <div>
      <div>
        <span>Username: </span>
        <span>{user.username}</span>
      </div>
      <div>
        <span>Password: </span>
        <span>{user.password}</span>
      </div>
      <div>
        <span>email: </span>
        <span>{user.email}</span>
      </div>
      <div>
        <span>Birthday: </span>
        <span>{user.Birthday}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={`/profile-edit`}>
          <Button variant="primary">Edit</Button>
        </Link>
        <Form onSubmit={handleSubmit}>
          <Button variant="outline-dark" type="submit" className="my-2 mx-2">
            Delete
          </Button>
        </Form>
      </div>
      <h5 class="card-title my-3">Favorite Movies</h5>

      {favoriteMovies.map((movie) => (
        <Col key={movie.id} md={3} className="pb-2">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </div>
  );
};
