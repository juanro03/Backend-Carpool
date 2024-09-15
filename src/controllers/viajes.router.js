import express from 'express';
import viajesService from "../services/viajes.service.js";

const router = express.Router();

router.get("/get", async (req, res) => {
    try {
        const viajes = await viajesService.getViajes();
        console.log('viajes obtenidos')
        res.json(viajes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los viajes" });
    }
});

router.get("/get/:param", async (req, res) => {
    try{
        if (isNaN(req.params.param)){
            //si no es un numero, es una fecha
            const fecha = req.params.param
            const viajes = await viajesService.getByFecha(fecha)

            if(!viajes){
                res.status(404).json({ error: 'Viajes no encontrados con dicha fecha' });
                return;
            }
            res.json(viajes)
        }
        else {
            //si es un numero, es un id
            const id = req.params.param
            const viaje = await viajesService.getById(id)

            if(!viaje){
                res.status(404).json({ error: 'Viaje no encontrado con dicha id' });
                return;
            }
            res.json(viaje)
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los viajes" });
    }
});

router.post('/new', async (req, res) => {
    try {
        const viaje = await viajesService.postViaje(req.body);
        res.json(viaje);
    } catch (error) {
        console.error("Error al insertar el viaje:", error);
        res.status(500).json({ error: "Error al insertar el viaje" });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
      const viajeCmd = {idViaje: req.params.id,};
      const deletedViaje = await viajesService.deleteViaje(viajeCmd);
      res.json(deletedViaje);

    } catch {
      console.error('Error al eliminar el viaje');
      res.status(500).json({ error: 'Error al eliminar el viaje' });
    }
  });

const viajesController = { router };

export default viajesController;