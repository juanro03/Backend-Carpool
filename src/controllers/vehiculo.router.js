import express from 'express';
import vehiculoService from "../services/vehiculo.service.js";

const router = express.Router();

router.get("/get", async (req, res) => {
    try {
        const vehiculos = await vehiculoService.getVehiculos();
        console.log('vehículos obtenidos');
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los vehículos" });
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const vehiculo = await vehiculoService.getVehiculoById(id);

        if (!vehiculo) {
            res.status(404).json({ error: 'Vehículo no encontrado con dicha id' });
            return;
        }
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el vehículo" });
    }
});

router.post('/new', async (req, res) => {
    try {
        const vehiculo = await vehiculoService.postVehiculo(req.body);
        res.json(vehiculo);
    } catch (error) {
        console.error("Error al insertar el vehículo:", error);
        res.status(500).json({ error: "Error al insertar el vehículo" });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedVehiculo = await vehiculoService.deleteVehiculo(id);
        res.json(deletedVehiculo);
    } catch (error) {
        console.error('Error al eliminar el vehículo');
        res.status(500).json({ error: 'Error al eliminar el vehículo' });
    }
});

const vehiculoController = { router };

export default vehiculoController;
