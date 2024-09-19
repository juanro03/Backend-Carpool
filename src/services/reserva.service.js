import { Op } from "sequelize";
import sequelize from "../models/database.js";

const getReservas = async () => {
    const resultado = await sequelize.models.Reserva.findAll({
        attributes: [
            'idReserva',
            'idUsuario',
            'idViaje',
            'asientosReservados'
        ],
        order: [['idReserva', 'ASC']]
    });
    return resultado.map(reserva => reserva.dataValues);
}

const getReservaById = async (id) => {
    const resultado = await sequelize.models.Reserva.findOne({
        attributes: [
            'idReserva',
            'idUsuario',
            'idViaje',
            'asientosReservados'
        ],
        where: { idReserva: id }
    });
    return resultado ? resultado.dataValues : null;
}

const postReserva = async (reservaCmd) => {
    const resultado = await sequelize.models.Reserva.create({
        idUsuario: reservaCmd.idUsuario,
        idViaje: reservaCmd.idViaje,
        asientosReservados: reservaCmd.asientosReservados
    });
    return resultado.dataValues;
}

const deleteReserva = async (id) => {
    const reserva = await sequelize.models.Reserva.findOne({ where: { idReserva: id } });

    if (!reserva) throw new Error("Reserva no encontrada");

    const deleteCount = await sequelize.models.Reserva.destroy({ where: { idReserva: id } });

    return { idReserva: id, mensaje: "Reserva eliminada con éxito" };
}

const reservaService = {
    getReservas,
    getReservaById,
    postReserva,
    deleteReserva
}

export default reservaService;
