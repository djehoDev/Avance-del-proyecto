# Requerimientos Funcionales  
## Módulo de Eventos – Plataforma Política Nacional en Discapacidad

---

## RF-01: Visualización de lista de eventos

El sistema debe permitir a los usuarios visualizar un listado de eventos disponibles, mostrando como mínimo:
- Título del evento
- Fecha
- Ubicación
- Imagen representativa

---

## RF-02: Visualización de detalle de evento

El sistema debe permitir a los usuarios visualizar el detalle completo de un evento al seleccionarlo, incluyendo:
- Título
- Descripción
- Fecha
- Hora
- Ubicación
- Organizador
- Imagen

---

## RF-03: Creación de eventos

El sistema debe permitir a un usuario autorizado registrar un nuevo evento ingresando obligatoriamente:
- Título
- Descripción
- Fecha
- Hora
- Ubicación

El sistema debe validar que ningún campo obligatorio esté vacío antes de guardar el evento.

---

## RF-04: Edición de eventos

El sistema debe permitir a un usuario autorizado modificar la información de un evento previamente registrado.

Los cambios deben reflejarse inmediatamente después de su actualización.

---

## RF-05: Eliminación de eventos

El sistema debe permitir a un usuario autorizado eliminar un evento existente.

El sistema debe solicitar confirmación antes de realizar la eliminación definitiva.

---

## RF-06: Búsqueda de eventos

El sistema debe permitir a los usuarios buscar eventos mediante palabras clave relacionadas con el título.

El sistema debe mostrar únicamente los eventos que coincidan con el criterio de búsqueda.

---

## RF-07: Filtrado por fecha

El sistema debe permitir a los usuarios filtrar eventos según su fecha.

---

## RF-08: Validación de fechas

El sistema no debe permitir la creación de eventos con fechas anteriores a la fecha actual.

---

## RF-09: Accesibilidad básica

El sistema debe permitir la navegación por la sección de eventos utilizando teclado, asegurando compatibilidad básica con estándares de accesibilidad web.

---

## RF-10: Integración con la plataforma existente

El módulo de eventos debe integrarse con la plataforma actual sin afectar el funcionamiento de las demás secciones.