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

  let favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m._id)
  );

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
      <div>
        <span>FavoriteMovies: </span>
        <span>{favoriteMovies}</span>
      </div>
      <Link to={`/profile-edit`}>
        <button className="back-button" style={{ cursor: "pointer" }}>
          Edit
        </button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit" className="my-2">
          Delete Profile
        </Button>
      </Form>

      {favoriteMovies.map((movie) => (
        <Col key={movie.id} md={3} className="pb-2">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </div>
  );
};
