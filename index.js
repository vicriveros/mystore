const express = require('express');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json()); //middelware utilizado para poder recibir datos json en la app

app.get('/', (req, res) => {
    res.send('Este es mi server en express');
})

app.listen(port, ()=> { //se crea el servidor http y escucha el puerto 3000
    console.log('Mi port' + port)
})

routerApi(app); //inicializa las rutas creadas en /routes

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);