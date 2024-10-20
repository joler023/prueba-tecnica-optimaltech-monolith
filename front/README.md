# Frontend Prueba Tecnica Optimal tech

Esta aplicación es un CRUD (Crear, Leer, Actualizar, Eliminar) de libros.
Permite gestionar una colección de libros mediante operaciones básicas de CRUD.

## Pasos para correr el proyecto

1. **Navegar al directorio del proyecto**:
  ```bash
  cd nombre-del-repositorio
  ```
2. **Instalar las dependencias**:
  ```bash
  npm install
  ```
3. **Iniciar el servidor de desarrollo**:
  ```bash
  npm run dev
  ```
4. **Abrir el navegador y acceder a la aplicación**:
  - La aplicación estará disponible en `http://localhost:5173`.

Estos pasos te permitirán tener el proyecto corriendo en tu entorno local.

Esta aplicación puede incluir dependencias como React como framework y Vite como Builder

## Pasos para hacer build y correr el proyecto en producción

1. **Construir el proyecto**:
  ```bash
  npm run build
  ```
  - Esto generará una carpeta `dist` con los archivos optimizados para producción.

2. **Servir los archivos estáticos**:
  - Puedes usar un servidor estático como `serve` para servir los archivos:
  ```bash
  npm install -g serve
  serve -s dist
  ```
  - La aplicación estará disponible en `http://localhost:3000`.

Estos pasos te permitirán desplegar y correr el proyecto en un entorno de producción.

Cabe aclarar que este proyecto genera en su build una carpeta de archivos estaticos, por tanto se puede subir a servicios estaticas como S3 de AWS
