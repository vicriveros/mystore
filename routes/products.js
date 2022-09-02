const express = require('express');
const faker = require('faker');

const router = express.Router(); // se usa el router para crear las rutas a los endpoints

router.get('/', (req, res) => {
    const products = [];
    const {size} = req.query; //recibir parametro por url. URL?parametro=valor
    const limit = size || 10;
    for(let index=0; index < limit; index++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        })
    }
    res.json(products)
})

router.get('/:id', (req, res) => {
    const {id} = req.params; //recibir parametro por url sin el simbolo ?
    res.json({
        id,
        name: 'product 4',
        price: 4000
    })
})

//crear producto
router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Created',
        data: body
    });
})

//update producto
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    res.json({
        message: 'Updated using patch',
        data: body,
        id
    });
})

//delete producto
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'Delete',
        id
    });
})

module.exports = router;