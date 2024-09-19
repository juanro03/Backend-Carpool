import { Op } from "sequelize";
import sequelize from "../models/database.js";

const getUsuarios = async () => {
    const resultado = await sequelize.models.Usuario.findAll({
        attributes: [
            'idUsuario',
            'nombre',
            'email',
            'passwordHash',
            'telefono'
        ],
        order: [['idUsuario', 'ASC']]
    });
    return resultado.map(usuario => usuario.dataValues);
}

const getUsuarioById = async (id) => {
    const resultado = await sequelize.models.Usuario.findOne({
        attributes: [
            'idUsuario',
            'nombre',
            'email',
            'passwordHash',
            'telefono'
        ],
        where: { idUsuario: id }
    });
    return resultado ? resultado.dataValues : null;
}

const postUsuario = async (usuarioCmd) => {
    const resultado = await sequelize.models.Usuario.create({
        nombre: usuarioCmd.nombre,
        email: usuarioCmd.email,
        passwordHash: usuarioCmd.passwordHash,
        telefono: usuarioCmd.telefono
    });
    return resultado.dataValues;
}

const deleteUsuario = async (id) => {
    const usuario = await sequelize.models.Usuario.findOne({ where: { idUsuario: id } });

    if (!usuario) throw new Error("Usuario no encontrado");

    const deleteCount = await sequelize.models.Usuario.destroy({ where: { idUsuario: id } });

    return { idUsuario: id, mensaje: "Usuario eliminado con éxito" };
}

const usuarioService = {
    getUsuarios,
    getUsuarioById,
    postUsuario,
    deleteUsuario
}

export default usuarioService;
