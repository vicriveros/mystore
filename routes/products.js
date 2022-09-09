const express = require('express');
const ProductsService = require('./../services/products'); //incluir la clase que maneja los productos

const router = express.Router(); // se usa el router para crear las rutas a los endpoints
const service = new ProductsService(); // crea una instancia de la clase que maneja los porductos

router.get('/', async (req, res) => {
    /*const {size} = req.query; //recibir parametro por url. URL?parametro=valor*/
    const products = await service.find(); // llama a la funcion que lista todos los productos
    res.json(products);
})

router.get('/:id', async (req, res) => {
    const {id} = req.params; //recibir parametro por url sin el simbolo ?
    const product = await service.findOne(id);
    res.json(product);
})

//crear producto
router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
})

//update producto
router.patch('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);    
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
    
})

//delete producto
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await service.delete(id);
        res.json(product);  
    } catch (error) {
        res.status(404).json({
            message: error.message
        })    
    }
    
})

module.exports = router;