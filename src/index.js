import express from "express";
import cors from "cors";
import viajesController from './controllers/viajes.router.js';


const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

//MiddleWars

//Rutas
app.use('/carpool/viajes', viajesController.router);

app.listen(3000)
console.log('Server is listening on port', 3000)
