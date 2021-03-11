const Categoria = require('../models/Categoria');

function getCategoria(req, res){
    Categoria.findByPk(req.params.id).then( Categoria => {
        res.json(Categoria);
    })
}

function addCategoria(req, res){
    if(req.body.nombre == ''){
        res.status(400).send({ code: 400, message: "Completa todos los campos" });
    }else{
        Categoria.create({
            nombre: req.body.nombre
        }).then( Categoria => {
            res.json(Categoria);
        });
    }
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
    if(req.body.nombre == ''){
        res.status(400).send({ code: 400, message: "Completa todos los campos" });
    }else{
        Categoria.update({
            nombre: req.body.nombre
        },{
            where: {
                id: req.params.id
            }
        }).then( result => {
            res.json(result);
        });
    }
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