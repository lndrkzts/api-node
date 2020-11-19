const bodyParser = require('body-parser');
const express = require('express');

const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const materiaRoutes = require('./routes/materia');
const inscripcionRoutes = require('./routes/inscripcion');

const app = express();

app.enable('trust proxy'); // Para que tome la IP, el request debe tener en la cabecera 'x-forwarded-for' y como valor la IP
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(usersRoutes);
app.use(loginRoutes);
app.use(materiaRoutes);
app.use(inscripcionRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado...');
});