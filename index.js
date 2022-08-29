const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Este es mi server en express');
})

app.get('/products', (req, res) => {
    res.json([
        {
            name: 'product 1',
            price: '2000'
        },
        {
            name: 'product 2',
            price: '3000'
        }
    ])
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        id,
        name: 'product 4',
        price: 4000
    })
})

app.listen(port, ()=> {
    console.log('Mi port' + port)
})