const Post = require('../models/Post');

function getPost(req, res){
    Post.findByPk(req.params.id).then( post => {
        res.json(post);
    })
}

function addPost(req, res){
    Post.create({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        idcategoria: req.body.idcategoria
    }).then( post => {
        res.json(post);
    }).catch( err => {
        res.json(err);
    });
}

function getPosts(req, res){
    Post.findAll({
        attributes:[
            'id',
            'titulo',
            'idcategoria'
        ]
    }).then( post => {
        res.json(post);
    })
}

function getPostscategoria(req, res){
    Post.findAll({
        where: {
            idcategoria: req.params.idcategoria
        }
    }).then( post => {
        res.json(post);
    })
}

function updatePost(req, res){
    Post.update({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        idcategoria: req.body.idcategoria
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

function deletePost(req, res){
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then( result => {
        res.json(result);
    });
}

module.exports = {
    addPost,
    getPosts,
    updatePost,
    deletePost,
    getPost,
    getPostscategoria
};