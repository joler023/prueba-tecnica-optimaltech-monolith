# Imagen de entorno de ejecución
FROM node:20.14.0-alpine3.20

# Directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json .

# Instalar dependencias
RUN npm install

# Instalar serve
RUN npm i -g serve

# Copiar archivos
COPY . .

# Pasar la variable de entorno en tiempo de compilación
ARG VITE_BASE_URL
ENV VITE_BASE_URL=${VITE_BASE_URL}

# Compilar
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Comando de ejecución
CMD [ "serve", "-s", "dist" ]