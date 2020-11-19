const express = require('express');
const JwtUtils = require('../utils/jsonwebtoken');

const PeticionController = require('../controllers/peticiones');
const MateriaController = require('../controllers/materias');
const AlumnoMateriaController = require('../controllers/alumnosmaterias');
const UsuarioController = require('../controllers/usuarios');

let router = express.Router();

router.route('/inscripcion/:idMateria').post([PeticionController.crear, 
    JwtUtils.extraerToken, 
    JwtUtils.verificarToken,
    PeticionController.asignarUsuario,
    UsuarioController.verificarTipoUsuarioAlumno, 
    MateriaController.verificarCupo,
    AlumnoMateriaController.crear]);

module.exports = router;