const express = require('express');
const JwtUtils = require('../utils/jsonwebtoken');

const PeticionController = require('../controllers/peticiones');
const MateriaController = require('../controllers/materias');
const UsuarioController = require('../controllers/usuarios');

let router = express.Router();

router.route('/materia').post([PeticionController.crear, 
    JwtUtils.extraerToken, 
    JwtUtils.verificarToken,
    PeticionController.asignarUsuario,
    UsuarioController.verificarTipoUsuarioAdmin, 
    MateriaController.crear]);

module.exports = router;