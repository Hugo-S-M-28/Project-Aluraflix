import React from "react";
import oneLogoImg from '../../assets/image 1.png';
import "./Header.css"
import { Button, Box } from "@mui/material"; // Importación de Material UI.

function Header({ setShowForm }) {
  return (
    <header className="header" aria-label="Encabezado de Aluraflix">
      {/* Logo */}
      <img
        src={oneLogoImg}
        alt="Logo de Aluraflix"
        className="header-logo"
        aria-label="Logo de Aluraflix"
      />

      {/* Botones de navegación */}
      <Box className="header-buttons" aria-label="Controles de navegación">
        <Button
          variant="outlined"
          color="primary"
          className="btn-home"
          onClick={() => setShowForm(false)}
        >
          HOME
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="btn-nuevo-video"
          onClick={() => setShowForm(true)}
        >
          NUEVO VIDEO
        </Button>
      </Box>
    </header>
  );
}

export default Header;
