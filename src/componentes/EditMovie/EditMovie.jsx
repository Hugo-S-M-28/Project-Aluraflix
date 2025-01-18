import React, { useState, useEffect } from "react";
import "./EditMovie.css";

// Colores asociados a cada categoría
const categoryColors = {
  Frontend: "#29b6f6", // Azul
  Backend: "#128818", // Verde
  Innovación: "#ffa726", // Naranja
  Gestión: "#ef5350", // Rojo
};

const EditMovie = ({ movie, updateMovie, closeForm }) => {
  const [editedMovie, setEditedMovie] = useState(movie);

  useEffect(() => {
    setEditedMovie(movie); // Aseguramos que los datos iniciales del formulario se reciban
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie({ ...editedMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(editedMovie); // Actualiza la película
    closeForm(); // Cierra el formulario de edición
  };

  // Color dinámico basado en la categoría seleccionada
  const categoryColor = categoryColors[editedMovie.categoria] || "#ccc"; // Color por defecto

  return (
    <div className="modal-overlay" onClick={closeForm}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ borderColor: categoryColor }}
      >
        <form onSubmit={handleSubmit}>
          <h2>Editar Película</h2>

          <label>
            TÍTULO
            <input
              type="text"
              name="title"
              value={editedMovie.title}
              onChange={handleChange}
              placeholder="Título de la película"
            />
          </label>

          <label>
            CATEGORÍA
            <select
              name="categoria"
              value={editedMovie.categoria}
              onChange={handleChange}
              style={{ color: categoryColor }}
            >
              <option value="">Seleccione una categoría</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Innovación">Innovación</option>
              <option value="Gestión">Gestión</option>
            </select>
          </label>

          <label>
            IMAGEN
            <input
              type="text"
              name="image"
              value={editedMovie.image}
              onChange={handleChange}
              placeholder="URL de la imagen"
            />
          </label>

          <label>
            VIDEO
            <input
              type="text"
              name="video"
              value={editedMovie.video}
              onChange={handleChange}
              placeholder="URL del video"
            />
          </label>

          <label>
            DESCRIPCIÓN
            <textarea
              name="descripcion"
              value={editedMovie.descripcion}
              onChange={handleChange}
              placeholder="Descripción de la tarjeta"
            />
          </label>

          <div>
            <button type="submit">Guardar Cambios</button>
            <button type="button" onClick={closeForm}>
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
