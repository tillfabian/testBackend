const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Post extends Model{}
Post.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNull:{
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
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isNull:{
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
    }, 
    idcategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt:{
                args: true,
                msg: 'El campo debe contener números'
            },
            min: {
                args: 1,
                msg: 'El valor debe ser mayor a 0'
            }
        }
    }
},{
    sequelize,
    modelName: 'posts'
});

module.exports = Post;