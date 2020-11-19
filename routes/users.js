const express = require('express');
const PeticionController = require('../controllers/peticiones');
const UsuarioController = require('../controllers/usuarios');

let router = express.Router();

router.route('/users').post([PeticionController.crear, UsuarioController.crear]);

module.exports = router;