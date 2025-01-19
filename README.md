# Project-AluraFlix

## ✨ Descripción del Proyecto
**AluraFlix** es una moderna aplicación web desarrollada con React y Vite que permite gestionar de manera eficiente videos provenientes de diversas plataformas como YouTube, Facebook, Vimeo, entre otras. Los usuarios pueden interactuar con los videos de forma sencilla: visualizar una lista de videos disponibles, agregar nuevos, editar información como título y descripción, y eliminar aquellos que ya no deseen. Además, cada video puede ser acompañado de una imagen de portada personalizada, mejorando la experiencia visual y la organización de la plataforma. AluraFlix facilita la gestión y exploración de contenido multimedia en tiempo real.

---

## 🌐 Características Principales

- **Listado de Videos**: Visualiza todos los videos registrados con su título, descripción e imagen de vista previa.
- **Agregar Videos**: Agrega nuevos videos mediante un formulario con campos para título, descripción, categoría, enlace de video e imagen.
- **Editar Videos**: Actualiza la información de un video existente de manera rápida y sencilla.
- **Eliminar Videos**: Elimina videos fácilmente.
- **Interacción Dinámica**: Gracias a React, se asegura una manipulación eficiente del DOM, proporcionando una experiencia rápida y reactiva.
- **Modal Interactivo**: Abre una vista expandida para ver más detalles del video.
- **Pie de Página Personalizado**: Incluye información adicional e interactiva.

---

## 🚀 Tecnologías Utilizadas

- **React**: Base para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y eficiente.
- **HTML**: Estructura del contenido.
- **CSS**: Diseño y estilos de la interfaz.
- **JavaScript**: Lógica de la aplicación y componentes.
- **Fetch API**: Realiza solicitudes HTTP para gestionar datos en formato JSON.
- **Material-UI**: Biblioteca de componentes para una interfaz moderna y responsiva.

---

## 📦 Instalación del Proyecto

### Paso 1: Clonar el Repositorio
```bash
# Clona este repositorio en tu máquina local
$ git clone https://github.com/Hugo-S-M-28//Project-Aluraflix.git
```

### Paso 2: Instalar Dependencias
```bash
# Navega al directorio del proyecto
$ cd AluraFlix

# Instala las dependencias
$ npm install
```

### Paso 3: Iniciar el Servidor de Desarrollo
```bash
# Inicia la aplicación en modo desarrollo
$ npm run dev
```

### Paso 4: Abrir en el Navegador
Accede a la aplicación desde tu navegador en: `http://localhost:5173`

---

## 😧 Servidor de Datos Simulado (JSON Server)
AluraFlix utiliza JSON Server para simular una base de datos. Sigue estos pasos para configurarlo:

### Iniciar JSON Server
```bash
# Inicia el servidor JSON en el puerto 5000
$ json-server --watch db.json --port 5000
```

### Acceso al Servidor
Accede al servidor desde tu navegador en: `http://localhost:5000/videos`

> Nota: El servidor se recargará automáticamente cuando se realicen cambios en los archivos fuente.

---

## 📂 Estructura del Proyecto

PROJECT-ALURAFLIX/
├── node_modules/               # Dependencias del proyecto.
├── public/                     # Archivos estáticos accesibles públicamente.
├── src/                        # Código fuente del proyecto.
│   ├── componentes/            # Componentes reutilizables del proyecto.
│   │   ├── banner/             # Gestiona la sección visual principal del banner.
│   │   │   ├── banner.css      # Estilos específicos del banner.
│   │   │   └── banner.jsx      # Lógica y estructura del componente.
│   │   ├── CategoryList/       # Administra la lista de categorías.
│   │   │   ├── CategorySection.css
│   │   │   └── CategorySection.jsx
│   │   ├── EditMovie/          # Componente para editar videos.
│   │   │   ├── EditMovie.css   # Estilos para la funcionalidad de edición.
│   │   │   └── EditMovie.jsx   # Lógica del componente de edición.
│   │   ├── Footer/             # Define el pie de página de la aplicación.
│   │   │   ├── Footer.css      # Estilos del pie de página.
│   │   │   └── Footer.jsx      # Lógica y diseño del componente.
│   │   ├── Header/             # Crea el encabezado y barra de navegación.
│   │   │   ├── Header.css      # Estilos específicos del encabezado.
│   │   │   └── Header.jsx      # Código del componente.
│   │   ├── MovieForm/          # Formulario para agregar o editar videos.
│   │   │   ├── MovieForm.css   # Estilos del formulario.
│   │   │   └── MovieForm.jsx   # Lógica y diseño del formulario.
│   │   └── MovieList/          # Presenta una lista de videos agregados.
│   │       ├── MovieList.css   # Estilos de la lista de videos.
│   │       └── MovieList.jsx   # Código del componente.
│   ├── App.css                 # Estilos generales de la aplicación.
│   ├── App.jsx                 # Componente raíz de la aplicación.
│   ├── imagenes.d.ts           # Declaración para trabajar con imágenes en TypeScript.
│   ├── index.css               # Estilos globales del proyecto.
│   └── main.jsx                # Punto de entrada principal de React.
├── db.json                     # Archivo JSON simulado como base de datos.
├── eslint.config.js
├── index.html                  # Archivo HTML principal para el bundle.
├── package-lock.json           # Bloqueo de dependencias.
├── package.json                # Configuración de dependencias y scripts.
├── README.md                   # Documentación del proyecto.
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js              # Configuración de Vite.

---

## 🗓 Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo con recarga en caliente.
- **`npm run build`**: Compila los archivos TypeScript y crea una versión optimizada para producción.
- **`npm run lint`**: Ejecuta ESLint para verificar el estilo y posibles errores en el código.
- **`npm run preview`**: Lanza una vista previa de la aplicación construida en modo producción.
- **`npm run predeploy`**: Construye la aplicación antes de desplegarla.

---
📬 Contacto
Si tienes preguntas, comentarios o estás interesado en mi trabajo, no dudes en contactarme:  

- **LinkedIn:** [Hugo Sánchez Milán](https://www.linkedin.com/in/hugo-s-197b81278/)  
- **GitHub:** [Hugo-S-M-28](https://github.com/Hugo-S-M-28)  

---
¡Gracias por visitar el proyecto **Project-AluraFlix**! 🎮  
Espero que disfrutes explorando mi trabajo y aprendiendo de este proyecto.  
