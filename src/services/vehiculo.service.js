import { Op } from "sequelize";
import sequelize from "../models/database.js";

const getVehiculos = async () => {
    const resultado = await sequelize.models.Vehiculo.findAll({
        attributes: [
            'idVehiculo',
            'idUsuario',
            'marca',
            'modelo',
            'anio',
            'patente'
        ],
        order: [['idVehiculo', 'ASC']]
    });
    return resultado.map(vehiculo => vehiculo.dataValues);
}

const getVehiculoById = async (id) => {
    const resultado = await sequelize.models.Vehiculo.findOne({
        attributes: [
            'idVehiculo',
            'idUsuario',
            'marca',
            'modelo',
            'anio',
            'patente'
        ],
        where: { idVehiculo: id }
    });
    return resultado ? resultado.dataValues : null;
}

const postVehiculo = async (vehiculoCmd) => {
    const resultado = await sequelize.models.Vehiculo.create({
        idUsuario: vehiculoCmd.idUsuario,
        marca: vehiculoCmd.marca,
        modelo: vehiculoCmd.modelo,
        anio: vehiculoCmd.anio,
        patente: vehiculoCmd.patente
    });
    return resultado.dataValues;
}

const deleteVehiculo = async (id) => {
    const vehiculo = await sequelize.models.Vehiculo.findOne({ where: { idVehiculo: id } });

    if (!vehiculo) throw new Error("Vehículo no encontrado");

    const deleteCount = await sequelize.models.Vehiculo.destroy({ where: { idVehiculo: id } });

    return { idVehiculo: id, mensaje: "Vehículo eliminado con éxito" };
}

const vehiculoService = {
    getVehiculos,
    getVehiculoById,
    postVehiculo,
    deleteVehiculo
}

export default vehiculoService;
