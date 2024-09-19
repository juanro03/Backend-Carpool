import { Sequelize } from 'sequelize';
import ViajeModel from './viaje.js';
import UsuarioModel from './Usuario.js';
import VehiculoModel from './Vehiculo.js';
import ReservaModel from './Reserva.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Define los modelos
sequelize.define('Viajes', ViajeModel.ViajeAttributes, {
    ...ViajeModel.ViajeOptions,
    freezeTableName: true
});
sequelize.define('Usuario', UsuarioModel.UsuarioAttributes, {
    ...UsuarioModel.UsuarioOptions,
    freezeTableName: true
});
sequelize.define('Vehiculo', VehiculoModel.VehiculoAttributes, {
    ...VehiculoModel.VehiculoOptions,
    freezeTableName: true
});
sequelize.define('Reserva', ReservaModel.ReservaAttributes, {
    ...ReservaModel.ReservaOptions,
    freezeTableName: true
});

// Sincroniza la base de datos
sequelize.sync({ force: true }) // O simplemente sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;
