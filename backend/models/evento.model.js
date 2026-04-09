const mongoose = require("mongoose");

const eventoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    fecha: {
        type: Date,
        required: true
    },
    ubicacion: {
        type: String
    },
    categoria: {
        type: String
    }
});

module.exports = mongoose.model("Evento", eventoSchema);