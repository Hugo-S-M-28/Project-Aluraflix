import React from "react";
import "./Footer.css";
import uneLogoImg from '../../assets/image 1.png';
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="footer-content" sx={{ bgcolor: "#333", color: "white", textAlign: "center", py: 2 }}>
       {/* Imagen del logo */}
       <img
          src={uneLogoImg}
          alt="Logo de Aluraflix"
          className="footer-logo"
          aria-label="Logo de Aluraflix"
        />
        {/* Texto del pie de página */}
        <Typography
          className="footer-text"
          variant="body2"
          sx={{ fontSize: "0.9em", marginTop: "0.5em" }}
        >
          © 2024 Aluraflix. Desarrollado por Hugo Sánchez Milán. Todos los derechos reservados.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
