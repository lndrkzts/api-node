const express = require('express');
const PeticionController = require('../controllers/peticiones');
const UsuarioController = require('../controllers/usuarios');
const JwtUtils = require('../utils/jsonwebtoken');

let router = express.Router();

router.route('/login').post([PeticionController.crear, UsuarioController.verificarCredenciales, JwtUtils.crearToken]);

module.exports = router;