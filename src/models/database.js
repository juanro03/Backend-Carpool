import {Sequelize} from 'sequelize';
import ViajeModel from "./viaje.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

sequelize.define(
    'Viajes',
    ViajeModel.ViajeAttributes,
    ViajeModel.ViajeOptions,
)

sequelize.sync({ force: true }) // O simplemente sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;