import { DataTypes } from 'sequelize';
import sequelize from './database.js'; // Asegúrate de que la instancia de Sequelize esté exportada

const Usuario = sequelize.define('Usuario', {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Usuario;
