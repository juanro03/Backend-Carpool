import { DataTypes } from 'sequelize';
import sequelize from './database.js'; // Asegúrate de que la instancia de Sequelize esté exportada

const Viaje = sequelize.define('Viaje', {
    idViaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ciudadOrigen: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ciudadDestino: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    puntosIntermedios: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    asientosDisponibles: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    idConductor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Usuario',
            key: 'idUsuario'
        },
        allowNull: true
    },
    pasajeros: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idVehiculo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Vehiculo',
            key: 'idVehiculo'
        },
        allowNull: true 
    },
    fecha: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    hora: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Viaje;
