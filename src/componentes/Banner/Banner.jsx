import React, { useState } from 'react';
import { Box, Typography, Card, Dialog, IconButton } from '@mui/material';
import bannerImg from '../../assets/banner.png';
import imageCard from '../../assets/player.png';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ReactPlayer from 'react-player';
import './Banner.css'; // Importamos el archivo CSS

const Banner = () => {
    const [open, setOpen] = useState(false); // Estado para abrir/cerrar el popup
    const [videoUrl, setVideoUrl] = useState(''); // URL del video

    const handleCardClick = () => {
        setVideoUrl('https://www.youtube.com/watch?v=ov7vA5HFe6w&ab_channel=AluraLatam'); // Cambia a tu enlace de YouTube
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setVideoUrl(''); // Limpia la URL del video
    };

    return (
        <Box
            className="banner"
            sx={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                color: '#fff',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/* Sección de texto */}
            <Box className="banner-text" sx={{ maxWidth: '50%' }}>
                <Typography variant="h5" className="banner-title" gutterBottom>
                    FRONT END
                </Typography>
                <Typography variant="h3" className="banner-heading" gutterBottom>
                    Challenge React
                </Typography>
                <Typography variant="body1" className="banner-description">
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde
                    podrás comprometerte en la resolución de un problema para poder
                    aplicar todos los conocimientos adquiridos en la formación React.
                </Typography>
            </Box>

            {/* Tarjeta flotante */}
            <Card
                className="card"
                onClick={handleCardClick}
                sx={{
                    cursor: 'pointer',
                    width: '300px',
                    height: '200px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 3,
                    '& img': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    },
                }}
            >
                <Box component="img" src={imageCard} alt="Miniatura" />
                <Box
                    className="card-icon"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                    }}
                >
                    <PlayCircleOutlineIcon sx={{ fontSize: 60 }} />
                </Box>
            </Card>

            {/* Popup para reproducir el video */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <Box sx={{ position: 'relative', padding: '16px', backgroundColor: 'black' }}>
                    {/* Botón para cerrar el popup */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {/* Reproductor de YouTube */}
                    <ReactPlayer
                        url={videoUrl}
                        playing={true} // Reproducir automáticamente
                        controls // Mostrar controles
                        width="100%" // Ocupa todo el ancho del popup
                        height="500px" // Ocupa todo el alto del popup
                    />
                </Box>
            </Dialog>
        </Box>
    );
};

export default Banner;
