const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Post extends Model{}
Post.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false
    }, 
    idcategoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'posts'
});

module.exports = Post;