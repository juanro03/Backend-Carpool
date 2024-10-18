import { DataTypes } from 'sequelize';
import sequelize from './database.js'; 

const Vehiculo = sequelize.define('Vehiculo', {
    idVehiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Usuario',
            key: 'idUsuario'
        },
        allowNull: true
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    patente: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Vehiculo;

