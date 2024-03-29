import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { MovieFilter } from "../movie-filter/movie-filter";
import { ProfileView } from "../profile-view/profile-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileEdit } from "../profile-edit/profile-edit";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser);

  const storedToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const [token, setToken] = useState(storedToken);

  useEffect(() => {
    if (!token) return;
    fetch("https://mymovieapp.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((mov) => {
          return {
            id: mov._id,
            title: mov.Title,
            //image: `https://covers.openlibrary.org/b/id/${mov.cover_i}-L.jpg`,
            director: mov.Director.Name,
            genre: mov.Genre.Name,
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row className="justify-content-md-center mt-2">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />{" "}
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <div>The list is empty!</div>
                ) : (
                  <MovieView movies={movies} user={user} setUser={setUser} />
                )}
              </>
            }
          />

          <Route
            path="/movies/genre/:genre"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <div>The list is empty!</div>
                ) : (
                  <GenreView movies={movies} user={user} />
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <div>The list is empty!</div>
                ) : (
                  <>
                    <MovieFilter movies={movies} genre={null} />

                    {movies.map((movie) => (
                      <Col key={movie.id} md={3} className="pb-2">
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <div>The list is empty!</div>
                ) : (
                  <ProfileView
                    user={user}
                    movies={movies}
                    setUser={setUser}
                    setToken={setToken}
                  />
                )}
              </>
            }
          />

          <Route
            path="/profile-edit"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <div>The list is empty!</div>
                ) : (
                  <ProfileEdit user={user} setUser={setUser} />
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
