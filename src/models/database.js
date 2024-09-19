import { Sequelize } from 'sequelize';

// Crear instancia de Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

export default sequelize;
