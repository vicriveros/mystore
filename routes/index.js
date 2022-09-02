const express = require('express');

const productsRouter = require('./products');
const usersRouter = require('./users');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router); //para que toda la app use api/v1 antes de los endpoints
    router.use('/products', productsRouter); //estos son los endpoints
    router.use('/users', usersRouter);
}

module.exports = routerApi;