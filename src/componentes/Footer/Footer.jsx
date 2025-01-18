import React from "react";
import "./Footer.css";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="footer-content" sx={{ bgcolor: "#333", color: "white", textAlign: "center", py: 2 }}>
        <img src="/image 1.png" alt="Logo" className="footer-logo" />
        <Typography className="footer-text" variant="body2" sx={{ fontSize: "0.9em" }}>
          © 2024 Aluraflix. Desarrollador por Hugo Sánchez Milán, Todos los derechos reservados.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
