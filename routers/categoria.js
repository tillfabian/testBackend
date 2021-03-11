const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoria');

//raiz index
router.get('/', CategoriaController.getCategorias);

//create
router.post('/add-categoria', CategoriaController.addCategoria);

//read /api/posts/:id
router.get('/:id', CategoriaController.getCategoria);

//update
router.patch('/update-categoria/:id', CategoriaController.updateCategoria);

//delete
router.delete('/delete-categoria/:id', CategoriaController.deleteCategoria);

module.exports = router;