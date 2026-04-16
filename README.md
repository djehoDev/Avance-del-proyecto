# Proyecto Fullstack - Plataforma de Eventos

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web fullstack que permite gestionar eventos.  
Los usuarios pueden crear, visualizar, editar y eliminar eventos, además de filtrarlos por categoría y ubicación.  

El sistema está construido con un backend en Node.js y MongoDB, y un frontend en HTML, CSS y JavaScript puro.

---

## Tecnologías utilizadas

### Backend:
- Node.js  
- Express  
- MongoDB Atlas  
- Mongoose  
- CORS  
- Dotenv  

### Frontend:
- HTML  
- CSS  
- JavaScript (Fetch API)  

---

## Instalación y configuración

Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrar a la carpeta del backend:
```bash
cd backend
```

Instalar dependencias:
```bash
npm install
```

Crear un archivo `.env` en la carpeta backend con el siguiente contenido:
```env
MONGODB_URI=tu_url_de_mongodb
PORT=3000
```

---

## Dependencias

Las dependencias utilizadas en el proyecto son:

- express  
- mongoose  
- cors  
- dotenv  

Para instalarlas:

```bash
npm install
```

---

## Ejecución del proyecto

Iniciar el servidor backend:

```bash
node index.js
```

Abrir el frontend:

- Ir a la carpeta `frontend`  
- Abrir el archivo `index.html` en el navegador  

---

## Funcionalidades

- Crear eventos  
- Ver lista de eventos  
- Editar eventos  
- Eliminar eventos  
- Filtrar eventos por categoría y ubicación  

---

## Notas

- El backend debe estar en ejecución para que el frontend funcione correctamente.  
- Se utilizó MongoDB Atlas como base de datos en la nube.  
- Los filtros se implementan mediante query params en el backend. 
