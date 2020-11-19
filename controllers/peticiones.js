const Peticion = require('../models').Peticion
const Responses = require('../utils/responses');

module.exports = {
  crear: (req, res, next) => {
    Peticion.create({
      hora: new Date(),
      ip: req.ip,
      ruta: req.route.path,
      metodo: req.method,
      usuario: (req.usuario) ? req.usuario.id : null,
    }).then(result => {
      req.idPeticion = result.id;
      next();
    }).catch(error => {
      res.json(Responses.badRequest(error));
  });
  },

  asignarUsuario: (req, res, next) => {
    Peticion.update({
      usuario: req.usuario.id,
    }, {
      where: { id: req.idPeticion }
    }).then(result => {
      next();
    });
  }
};