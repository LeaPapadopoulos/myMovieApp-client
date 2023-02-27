import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    fetch("https://mymovieapp.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => { 
        const moviesFromApi = data.map((mov) => {
          return {
            id: mov._id,
            title: mov.Title,
            //image: `https://covers.openlibrary.org/b/id/${mov.cover_i}-L.jpg`,
            director: mov.Director.Name,
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);


 


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
