let eventoEditando = null;

const API = "http://localhost:3000/eventos";

const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo = "info") {
    mensaje.textContent = texto;
    mensaje.className = tipo;
}

// Cargar eventos al iniciar
document.addEventListener("DOMContentLoaded", obtenerEventos);

// Obtener eventos
async function obtenerEventos() {
    try {
        const res = await fetch(API);
        if (!res.ok) {
            throw new Error("No se pudieron cargar los eventos");
        }

        const data = await res.json();
        mostrarEventos(data.data);
    } catch (error) {
        mostrarMensaje(error.message, "error");
    }
}

// Crear evento
document.getElementById("formEvento").addEventListener("submit", async (e) => {
    e.preventDefault();

    const evento = {
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        fecha: document.getElementById("fecha").value,
        ubicacion: document.getElementById("ubicacion").value,
        categoria: document.getElementById("categoria").value || undefined
    };

    try {
        let res;

        if (eventoEditando) {
            res = await fetch(`${API}/${eventoEditando}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(evento)
            });

            eventoEditando = null;

        } else {
            res = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(evento)
            });
        }

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || data.mensaje || "Error al guardar evento");
        }

        e.target.reset();
        mostrarMensaje(data.mensaje || "Operación exitosa", "success");
        obtenerEventos();

    } catch (error) {
        mostrarMensaje(error.message, "error");
    }
});

async function eliminarEvento(id) {
    if (!confirm("¿Seguro que quiere eliminar este evento?")) return;

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    obtenerEventos();
}

function editarEvento(evento) {
    eventoEditando = evento._id;

    document.getElementById("titulo").value = evento.titulo;
    document.getElementById("descripcion").value = evento.descripcion;
    document.getElementById("fecha").value = evento.fecha.split("T")[0];
    document.getElementById("ubicacion").value = evento.ubicacion;
    document.getElementById("categoria").value = evento.categoria;
}

async function filtrarEventos() {
    const categoria = document.getElementById("filtroCategoria").value;
    const ubicacion = document.getElementById("filtroUbicacion").value;

    let url = API + "?";

    if (categoria) {
        url += `categoria=${encodeURIComponent(categoria)}&`;
    }

    if (ubicacion) {
        url += `ubicacion=${encodeURIComponent(ubicacion)}&`;
    }

    try {
        const res = await fetch(url);
        const data = await res.json();

        mostrarEventos(data.data);

    } catch (error) {
        mostrarMensaje("Error al filtrar eventos", "error");
    }
}

function limpiarFiltros() {
    document.getElementById("filtroCategoria").value = "";
    document.getElementById("filtroUbicacion").value = "";

    obtenerEventos();
}

function mostrarEventos(eventos) {
    const lista = document.getElementById("listaEventos");
    const plantilla = document.getElementById("plantillaEvento");
    lista.innerHTML = "";

    eventos.forEach(evento => {
        const clone = plantilla.content.cloneNode(true);
        
        clone.querySelector(".titulo").textContent = evento.titulo;
        clone.querySelector(".descripcion").textContent = evento.descripcion || "";
        clone.querySelector(".fecha").textContent = new Date(evento.fecha).toLocaleDateString("es-ES");
        clone.querySelector(".ubicacion").textContent = evento.ubicacion || "";
        clone.querySelector(".categoria").textContent = evento.categoria || "Social";
        
        clone.querySelector(".btnEliminar").addEventListener("click", () => eliminarEvento(evento._id));
        clone.querySelector(".btnEditar").addEventListener("click", () => editarEvento(evento));
        
        lista.appendChild(clone);
    });
}