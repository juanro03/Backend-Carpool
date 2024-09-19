import express from "express";
import cors from "cors";
import viajesController from './controllers/viajes.router.js';
import reservaController from "./controllers/reserva.router.js";
import vehiculoController from "./controllers/vehiculo.router.js";
import usuarioController from "./controllers/usuario.router.js";



const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

//MiddleWars

//Rutas
app.use('/carpool/viajes', viajesController.router);
app.use('/carpool/usuarios', usuarioController.router);
app.use('/carpool/vehiculos', vehiculoController.router);
app.use('/carpool/reservas', reservaController.router);

app.listen(3000)
console.log('Server is listening on port', 3000)
