/*import { ResourceNotFound } from 
"../errors/resource-not-found-error.js"*/
import { Op } from "sequelize";
import sequelize from "../models/database.js";

const getViajes = async () => {
    const resultado = await sequelize.models.Viajes.findAll({
        attributes: [
            'idViaje',
            'ciudadOrigen',
            'ciudadDestino',
            'puntosIntermedios',
            'asientosDisponibles',
            'precio',
            'conductor',
            'pasajeros',
            'vehiculo',
            'fecha',
            'hora'
        ],
        order: [['idViaje', 'ASC']]
    })
    console.log('resultado', resultado)
    return resultado.map(viaje => {
        return {
            idViaje: viaje.dataValues.idViaje,
            ciudadOrigen: viaje.dataValues.ciudadOrigen,
            ciudadDestino: viaje.dataValues.ciudadDestino,
            puntosIntermedios: viaje.dataValues.puntosIntermedios,
            asientosDisponibles: viaje.dataValues.asientosDisponibles,
            precio: viaje.dataValues.precio,
            conductor: viaje.dataValues.conductor,
            pasajeros: viaje.dataValues.pasajeros,
            vehiculo: viaje.dataValues.vehiculo,
            fecha: viaje.dataValues.fecha,
            hora: viaje.dataValues.hora
        }
    })
}

const getById = async (id) => {
    const resultado = await sequelize.models.Viajes.findOne({
        attributes: [
            'idViaje',
            'ciudadOrigen',
            'ciudadDestino',
            'puntosIntermedios',
            'asientosDisponibles',
            'precio',
            'conductor',
            'pasajeros',
            'vehiculo',
            'fecha',
            'hora'
        ],
        where: { idViaje: id },
        order: [['idViaje', 'ASC']]
    })
    console.log('resultado', resultado)
    return {
        idViaje: resultado.dataValues.idViaje,
        ciudadOrigen: resultado.dataValues.ciudadOrigen,
        ciudadDestino: resultado.dataValues.ciudadDestino,
        puntosIntermedios: resultado.dataValues.puntosIntermedios,
        asientosDisponibles: resultado.dataValues.asientosDisponibles,
        precio: resultado.dataValues.precio,
        conductor: resultado.dataValues.conductor,
        pasajeros: resultado.dataValues.pasajeros,
        vehiculo: resultado.dataValues.vehiculo,
        fecha: resultado.dataValues.fecha,
        hora: resultado.dataValues.hora
    };
}

const getByFecha = async (fecha) => {
    const resultado = await sequelize.models.Viajes.findAll({
        attributes: [
            'idViaje',
            'ciudadOrigen',
            'ciudadDestino',
            'puntosIntermedios',
            'asientosDisponibles',
            'precio',
            'conductor',
            'pasajeros',
            'vehiculo',
            'fecha',
            'hora'
        ],
        where: {fecha: fecha},
        order: [['idViaje', 'ASC']]
    })
    console.log('resultado', resultado)
    return resultado.map(viaje => {
        return {
            idViaje: viaje.dataValues.idViaje,
            ciudadOrigen: viaje.dataValues.ciudadOrigen,
            ciudadDestino: viaje.dataValues.ciudadDestino,
            puntosIntermedios: viaje.dataValues.puntosIntermedios,
            asientosDisponibles: viaje.dataValues.asientosDisponibles,
            precio: viaje.dataValues.precio,
            conductor: viaje.dataValues.conductor,
            pasajeros: viaje.dataValues.pasajeros,
            vehiculo: viaje.dataValues.vehiculo,
            fecha: viaje.dataValues.fecha,
            hora: viaje.dataValues.hora
        }
    })
}

const postViaje = async (viajeCmd) => {
    console.log(viajeCmd)
    const resultado = await sequelize.models.Viajes.create({
        ciudadOrigen: viajeCmd.ciudadOrigen,
        ciudadDestino: viajeCmd.ciudadDestino,
        puntosIntermedios: viajeCmd.puntosIntermedios,
        asientosDisponibles: viajeCmd.asientosDisponibles,
        precio: viajeCmd.precio,
        conductor: viajeCmd.conductor,
        pasajeros: viajeCmd.pasajeros,
        vehiculo: viajeCmd.vehiculo,
        fecha: viajeCmd.fecha,
        hora: viajeCmd.hora
    })
    console.log('insertar viaje', resultado)
    return {
        ciudadOrigen: resultado.dataValues.ciudadOrigen,
        ciudadDestino: resultado.dataValues.ciudadDestino,
        puntosIntermedios: resultado.dataValues.puntosIntermedios,
        precio: resultado.dataValues.precio,
        conductor: resultado.dataValues.conductor,
        fecha: resultado.dataValues.fecha,
        hora: resultado.dataValues.hora
    };
}

const deleteViaje = async (viajeCmd) => {
    const viaje = await sequelize.models.Viajes.findOne({
        where: { idViaje: viajeCmd.idViaje},
    });

    if(!viaje){throw console.log("Auto no encontrado");}

    const deleteCount = await sequelize.models.Viajes.destroy({
        where: { idViaje: viajeCmd.idViaje},
    });
      
    console.log(deleteCount, "Viaje eliminado con exito"); // Número de registros eliminados
    return { idViaje: viajeCmd.idViaje, mensaje: "Viaje eliminado con exito" };
}

const viajesService = {
    getViajes,
    getById,
    getByFecha,
    postViaje,
    deleteViaje,
}

export default viajesService;
