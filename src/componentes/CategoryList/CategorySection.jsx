import React, { useState } from "react";
import deleteImg from '../../assets/icons/delete-icon.png';
import editImg from '../../assets/icons/edit-icon.png';
import "./CategorySection.css";

function MovieList({ movies, deleteMovie, onEdit }) {
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para la película seleccionada
  
    const categoryColors = {
      Frontend: "#29b6f6",
      Backend: "#128818",
      Innovación: "#ffe626",
      Gestión: "#ef5350",
    };
  
    const groupedMovies = movies.reduce((groups, movie) => {
      const category = movie.category || "Sin Categoría";
      if (!groups[category]) groups[category] = [];
      groups[category].push(movie);
      return groups;
    }, {});
  
    const handleCardClick = (movie) => setSelectedMovie(movie);
    const handleCloseCard = () => setSelectedMovie(null);
  
    return (
      <div className="movie-list">
        {Object.keys(groupedMovies).map((category) => (
          <div
            key={category}
            className="category-section"
            style={{
              border: `4px solid ${categoryColors[category] || "#fff"}`, // Bordes brillantes para la sección
              boxShadow: `0 0 10px ${categoryColors[category] || "#fff"}`,
            }}
          >
            <h2
              style={{
                backgroundColor: categoryColors[category] || "#333",
                color: "#fff",
              }}
            >
              {category.toUpperCase()}
            </h2>
            <div className="movies-in-category">
              {groupedMovies[category].map((movie) => (
                <div
                  key={movie.id}
                  className="movie-item"
                  style={{
                    border: `3px solid ${categoryColors[category] || "#fff"}`, // Bordes de las tarjetas
                    boxShadow: `0 0 10px ${categoryColors[category] || "#fff"}`,
                  }}
                >
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="movie-image"
                    onClick={() => handleCardClick(movie)}
                  />
                  <h3>{movie.title}</h3>
                  <div className="botonera">
                    <button
                      onClick={() => deleteMovie(movie.id)}
                      className="action-button"
                    >
                      <span className="button-content">
                        <img src={deleteImg} alt="icono de eliminar" />
                        Eliminar
                      </span>
                    </button>
                    <button
                      onClick={() => onEdit(movie)}
                      className="action-button"
                    >
                      <span className="button-content">
                        <img src={editImg} alt="icono de editar" />
                        Editar
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
  
        {selectedMovie && (
          <div className="movie-card-expanded" onClick={handleCloseCard}>
            <div className="expanded-content">
              <img src={selectedMovie.imageUrl} alt={selectedMovie.title} />
              <h3>{selectedMovie.title}</h3>
              <p>{selectedMovie.description}</p>
              <p>
                <strong>Categoría:</strong> {selectedMovie.category}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default MovieList;
  