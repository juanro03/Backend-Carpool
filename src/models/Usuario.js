import { DataTypes } from 'sequelize';

const UsuarioAttributes = {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El nombre es necesario"
            }
        }
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "Debe ser una dirección de correo electrónico válida"
            }
        }
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}

const UsuarioOptions = {
    timestamps: false
}

const UsuarioModel = {
    UsuarioAttributes,
    UsuarioOptions
}

export default UsuarioModel;
