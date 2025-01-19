import React, { useState, useEffect } from "react";
import "./Presentacion.css";

function Presentacion() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para la tarjeta expandida

  // Obtener películas del servidor
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error al cargar las películas", error);
      }
    };

    fetchMovies();
  }, []);

  // Cambiar película automáticamente cada 4 segundos
  useEffect(() => {
    if (movies.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length); // Cambiar al siguiente índice, volviendo al inicio
      }, 4000);

      return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
    }
  }, [movies]); // Este efecto depende de las películas cargadas

  const handleCardClick = (movie) => {
    setSelectedMovie(movie); // Expande la tarjeta al hacer clic
  };

  const handleCloseCard = () => {
    setSelectedMovie(null); // Cierra la tarjeta expandida
  };

  if (movies.length === 0) {
    return <p>Cargando películas...</p>; // Mostrar mensaje mientras se cargan las películas
  }

  const currentMovie = movies[currentMovieIndex]; // Película actual

  return (
    <section className="presentacion">
      {/* Tarjeta de la película actual */}
      <div
        className="movie-card"
        onClick={() => handleCardClick(currentMovie)}
        role="button"
        aria-label={`Seleccionar película: ${currentMovie.title}`}
        tabIndex={0} // Permite acceder con teclado
        onKeyPress={(e) => e.key === "Enter" && handleCardClick(currentMovie)} // Expande con Enter
      >
        <img
          src={currentMovie.image}
          alt={`Imagen de la película ${currentMovie.title}`}
          loading="lazy" // Optimización de carga diferida
        />
        <h3>{currentMovie.title}</h3>
        <p>{currentMovie.descripcion}</p>
      </div>

      {/* Tarjeta expandida */}
      {selectedMovie && (
        <div
          className="expanded-card"
          role="dialog"
          aria-labelledby="expanded-movie-title"
          onClick={handleCloseCard}
        >
          <div
            className="expanded-content"
            onClick={(e) => e.stopPropagation()} // Evitar cierre accidental al hacer clic dentro
          >
            <button
              className="close-button"
              onClick={handleCloseCard}
              aria-label="Cerrar tarjeta expandida"
            >
              ✖
            </button>
            <img
              src={selectedMovie.image}
              alt={`Imagen de la película ${selectedMovie.title}`}
              loading="lazy"
            />
            <h3 id="expanded-movie-title">{selectedMovie.title}</h3>
            <p>{selectedMovie.descripcion}</p>
            <p>
              <strong>Categoría:</strong> {selectedMovie.categoria}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Presentacion;
