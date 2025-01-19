import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./componentes/Header/Header";
import Banner from "./componentes/Banner/Banner";
import MovieForm from "./componentes/MovieForm/MovieForm";
import MovieList from "./componentes/CategoryList/CategorySection";
import EditMovie from "./componentes/EditMovie/EditMovie";
import Footer from "./componentes/Footer/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error al obtener las películas:", error));
  }, []);

  const addMovie = (newMovie) => {
    axios
      .post("http://localhost:5000/movies", newMovie)
      .then((response) => setMovies([...movies, response.data]))
      .catch((error) => console.error("Error al guardar la película:", error));
  };

  const deleteMovie = (id) => {
    axios
      .delete(`http://localhost:5000/movies/${id}`)
      .then(() => setMovies(movies.filter((movie) => movie.id !== id)))
      .catch((error) => console.error("Error al eliminar la película:", error));
  };

  const updateMovie = (updatedMovie) => {
    axios
      .put(`http://localhost:5000/movies/${updatedMovie.id}`, updatedMovie)
      .then(() => {
        setMovies(
          movies.map((movie) =>
            movie.id === updatedMovie.id ? updatedMovie : movie
          )
        );
        setEditingMovie(null);
      })
      .catch((error) =>
        console.error("Error al actualizar la película:", error)
      );
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <Header setShowForm={setShowForm} />

      {/* Banner */}
      <Banner />

      {/* Formulario para agregar videos */}
      {showForm && !editingMovie && (
        <MovieForm addMovie={addMovie} closeForm={() => setShowForm(false)} />
      )}

      {/* Lista de categorías y videos */}
      <MovieList
        movies={movies}
        deleteMovie={deleteMovie}
        onEdit={handleEdit}
      />

      {/* Modal de edición */}
      {editingMovie && (
        <EditMovie
          movie={editingMovie}
          updateMovie={updateMovie}
          closeForm={() => setEditingMovie(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
