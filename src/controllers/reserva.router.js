import express from 'express';
import reservaService from "../services/reserva.service.js";

const router = express.Router();

router.get("/get", async (req, res) => {
    try {
        const reservas = await reservaService.getReservas();
        console.log('reservas obtenidas');
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las reservas" });
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const reserva = await reservaService.getReservaById(id);

        if (!reserva) {
            res.status(404).json({ error: 'Reserva no encontrada con dicha id' });
            return;
        }
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la reserva" });
    }
});

router.post('/new', async (req, res) => {
    try {
        const reserva = await reservaService.postReserva(req.body);
        res.json(reserva);
    } catch (error) {
        console.error("Error al insertar la reserva:", error);
        res.status(500).json({ error: "Error al insertar la reserva" });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedReserva = await reservaService.deleteReserva(id);
        res.json(deletedReserva);
    } catch (error) {
        console.error('Error al eliminar la reserva');
        res.status(500).json({ error: 'Error al eliminar la reserva' });
    }
});

const reservaController = { router };

export default reservaController;

