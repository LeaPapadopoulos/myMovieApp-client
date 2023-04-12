import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
// import "./movie-card.scss";

export const MovieCard = ({ movie, onBookClick }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Button onClick={() => onBookClick(movie)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
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
