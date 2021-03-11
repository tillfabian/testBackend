const Categoria = require('../models/Categoria');

function getCategoria(req, res){
    Categoria.findByPk(req.params.id).then( Categoria => {
        res.json(Categoria);
    })
}

function addCategoria(req, res){
    Categoria.create({
        nombre: req.body.nombre
    }).then( Categoria => {
        res.json(Categoria);
    }).catch( err => {
        res.json(err);
    });
}

function getCategorias(req, res){
    Categoria.findAll({
        attributes:[
            'id',
            'nombre'
        ]
    }).then( Categoria => {
        res.json(Categoria);
    })
}

function updateCategoria(req, res){
    Categoria.update({
        nombre: req.body.nombre
    },{
        where: {
            id: req.params.id
        }
    }).then( result => {
        res.json(result);
    }).catch( err => {
        res.json(err);
    });
}

function deleteCategoria(req, res){
    Categoria.destroy({
        where: {
            id: req.params.id
        }
    }).then( result => {
        res.json(result);
    });
}

module.exports = {
    addCategoria,
    getCategorias,
    updateCategoria,
    deleteCategoria,
    getCategoria
};