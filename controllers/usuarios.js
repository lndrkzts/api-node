const Usuario = require('../models').Usuario
const Responses = require('../utils/responses');

module.exports = {
  crear: (req, res) => {
    Usuario.create({
      nombre: req.body.nombre ? req.body.nombre.toLowerCase() : null,
      email: req.body.email ? req.body.email.toLowerCase() : null,
      clave: req.body.clave ? req.body.clave.toLowerCase() : null,
      tipo: req.body.tipo ? req.body.tipo.toLowerCase() : null,
    }).then(result => {
        res.json(Responses.success('Usuario creado correctamente'));
    }).catch(error => {
        res.json(Responses.badRequest(error.errors[0].message));
    });
  },

  verificarCredenciales: (req, res, next) => {
    Usuario.findOne({
      where: {
        email: req.body.email ? req.body.email.toLowerCase() : null,
        clave: req.body.clave ? req.body.clave.toLowerCase() : null,
      }
    }).then(usuario => {
      if (usuario){
        req.usuario = usuario;
        next();
      } 
      else {
        res.json(Responses.badRequest('Credenciales invalidas'));
      }
    })
  },

  verificarTipoUsuarioAdmin: (req, res, next) => {
    if (req.usuario.tipo == 'admin'){
      next();
    } else {
      res.json(Responses.badRequest('Tipo de usuario no autorizado'));
    }
  },

  verificarTipoUsuarioAlumno: (req, res, next) => {
    if (req.usuario.tipo == 'alumno'){
      next();
    } else {
      res.json(Responses.badRequest('Tipo de usuario no autorizado'));
    }
  }
};