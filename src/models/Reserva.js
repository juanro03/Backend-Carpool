import { DataTypes } from 'sequelize';
import sequelize from './database.js'; 

const Reserva = sequelize.define('Reserva', {
    idReserva: {
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
    idViaje: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Viaje',
            key: 'idViaje'
        },
        allowNull: true
    },
    asientosReservados: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Reserva;
