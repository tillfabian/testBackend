const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Categoria extends Model{}
Categoria.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: 'El campo tiene que ser completado'
            },
            isAlphanumeric: {
                args: true,
                msg: 'El campo solo puede contener letras y números'
            },
            len: {
                args: [3,255],
                msg: 'El campo debe tener minimo 3 y maximo 255 caracteres'
            }
        }
    }
},{
    sequelize,
    modelName: 'categoria'
});

module.exports = Categoria;