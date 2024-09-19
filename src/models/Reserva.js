import { DataTypes } from 'sequelize';

const ReservaAttributes = {
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
            model: 'Viajes',
            key: 'idViaje'
        },
        allowNull: true
    },
    asientosReservados: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

const ReservaOptions = {
    timestamps: false
}

const ReservaModel = {
    ReservaAttributes,
    ReservaOptions
}

export default ReservaModel;
