import { DataTypes } from 'sequelize';

const ViajeAttributes = {
    idViaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ciudadOrigen: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La ciudad de origen es necesaria"
            }
        }
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
    conductor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pasajeros: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vehiculo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    hora: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}

const ViajeOptions = {
    timestamps: false
}

const ViajeModel = {
    ViajeAttributes,
    ViajeOptions
}

export default ViajeModel;
