const express = require("express");
const router = express.Router();
const Evento = require("../models/evento.model");

// Crear evento POST
router.post("/", async (req, res) => {
    try {
        const nuevoEvento = new Evento(req.body);
        const eventoGuardado = await nuevoEvento.save();
        res.status(201).json(eventoGuardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los eventos GET
router.get("/", async (req, res) => {
    try {
        const eventos = await Evento.find();
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un evento por ID GET
router.get("/:id", async (req, res) => {
    try {
        const evento = await Evento.findById(req.params.id);
        if (!evento) return res.status(404).json({ mensaje: "No encontrado" });
        res.json(evento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar evento PUT
router.put("/:id", async (req, res) => {
    try {
        const eventoActualizado = await Evento.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(eventoActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar evento DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Evento.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Evento eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;