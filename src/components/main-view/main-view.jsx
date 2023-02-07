import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Silence of the Lambs",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
      director: "Jonathan Demme",
    },
    {
      id: 2,
      title: "Amelie",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      director: "Jean-Pierre Jeunet",
    },
    {
      id: 3,
      title: "Lord of the Rings",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      director: "Peter Jackson",
    },
    {
      id: 4,
      title: "Twilight",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      director: "Stephanie Meyer",
    },
    {
      id: 5,
      title: "Forrest Gump",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
      director: "Robert Zemeckis",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }
  return (
    <div>
      <button
        onClick={() => {
          alert("Nice!");
        }}
      >
        Click me!
      </button>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onBookClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
