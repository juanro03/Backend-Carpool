/*import { ResourceNotFound } from 
"../errors/resource-not-found-error.js"*/
import { Op } from "sequelize";
import sequelize from "../models/database.js";

const getViajes = async () => {
    try {
        const resultado = await sequelize.models.Viaje.findAll({
            attributes: [
                'idViaje',
                'ciudadOrigen',
                'ciudadDestino',
                'puntosIntermedios',
                'asientosDisponibles',
                'precio',
                'idConductor',
                'pasajeros',
                'idVehiculo',
                'fecha',
                'hora'
            ],
            order: [['idViaje', 'ASC']]
        });
        console.log('resultado', resultado);
        return resultado.map(viaje => viaje.dataValues);
    } catch (error) {
        console.error('Error en getViajes:', error);
        throw error;
    }
};

const getById = async (id) => {
    try {
        const resultado = await sequelize.models.Viaje.findOne({
            attributes: [
                'idViaje',
                'ciudadOrigen',
                'ciudadDestino',
                'puntosIntermedios',
                'asientosDisponibles',
                'precio',
                'idConductor',
                'pasajeros',
                'idVehiculo',
                'fecha',
                'hora'
            ],
            where: { idViaje: id },
            order: [['idViaje', 'ASC']]
        });
        if (!resultado) throw new Error('Viaje no encontrado');
        console.log('resultado', resultado);
        return resultado.dataValues;
    } catch (error) {
        console.error('Error en getById:', error);
        throw error;
    }
};


const getByFecha = async (fecha) => {
    const resultado = await sequelize.models.Viaje.findAll({
        attributes: [
            'idViaje',
            'ciudadOrigen',
            'ciudadDestino',
            'puntosIntermedios',
            'asientosDisponibles',
            'precio',
            'idConductor',
            'pasajeros',
            'idVehiculo',
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
            idConductor: viaje.dataValues.idConductor,
            pasajeros: viaje.dataValues.pasajeros,
            idVehiculo: viaje.dataValues.idVehiculo,
            fecha: viaje.dataValues.fecha,
            hora: viaje.dataValues.hora
        }
    })
}

const postViaje = async (viajeCmd) => {
    console.log(viajeCmd)
    const resultado = await sequelize.models.Viaje.create({
        ciudadOrigen: viajeCmd.ciudadOrigen,
        ciudadDestino: viajeCmd.ciudadDestino,
        puntosIntermedios: viajeCmd.puntosIntermedios,
        asientosDisponibles: viajeCmd.asientosDisponibles,
        precio: viajeCmd.precio,
        idConductor: viajeCmd.idConductor,
        pasajeros: viajeCmd.pasajeros,
        idVehiculo: viajeCmd.idVehiculo,
        fecha: viajeCmd.fecha,
        hora: viajeCmd.hora
    })
    console.log('insertar viaje', resultado)
    return {
        ciudadOrigen: resultado.dataValues.ciudadOrigen,
        ciudadDestino: resultado.dataValues.ciudadDestino,
        puntosIntermedios: resultado.dataValues.puntosIntermedios,
        asientosDisponibles: resultado.dataValues.asientosDisponibles,
        precio: resultado.dataValues.precio,
        idConductor: resultado.dataValues.idConductor,
        pasajeros: resultado.dataValues.pasajeros,
        idVehiculo: resultado.dataValues.idVehiculo,
        fecha: resultado.dataValues.fecha,
        hora: resultado.dataValues.hora
    };
}

const deleteViaje = async (viajeCmd) => {
    const viaje = await sequelize.models.Viaje.findOne({
        where: { idViaje: viajeCmd.idViaje},
    });

    if(!viaje){throw console.log("Auto no encontrado");}

    const deleteCount = await sequelize.models.Viaje.destroy({
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
