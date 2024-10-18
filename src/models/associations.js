import Usuario from './Usuario.js';
import Vehiculo from './Vehiculo.js';
import Viaje from './Viaje.js';
import Reserva from './Reserva.js';

// Relaciones entre modelos
// Usuario y Vehiculo (uno a uno opcional)
Usuario.hasOne(Vehiculo, {
    foreignKey: 'idUsuario',
    as: 'vehiculo',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});
Vehiculo.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    as: 'usuario'
});

// Usuario y Viaje (uno a muchos opcional)
Usuario.hasMany(Viaje, {
    foreignKey: 'idConductor',
    as: 'viajes',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});
Viaje.belongsTo(Usuario, {
    foreignKey: 'idConductor',
    as: 'conductor'
});

// Viaje y Vehiculo (uno a uno opcional)
Viaje.belongsTo(Vehiculo, {
    foreignKey: 'idVehiculo',
    as: 'vehiculo',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});
Vehiculo.hasOne(Viaje, {
    foreignKey: 'idVehiculo',
    as: 'viaje',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});

// Viaje y Reserva (uno a muchos opcional)
Viaje.hasMany(Reserva, {
    foreignKey: 'idViaje',
    as: 'reservas',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Reserva.belongsTo(Viaje, {
    foreignKey: 'idViaje',
    as: 'viaje'
});

// Usuario y Reserva (uno a muchos opcional)
Usuario.hasMany(Reserva, {
    foreignKey: 'idUsuario',
    as: 'reservas',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});
Reserva.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    as: 'usuario'
});
