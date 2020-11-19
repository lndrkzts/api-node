const jwt = require('jsonwebtoken');
const Responses = require('./responses');

module.exports = {
  crearToken: (req, res) => {
    jwt.sign({ usuario: req.usuario }, 'mysecretkey', (error, token) =>{
      if (error){
        res.json(Responses.badRequest('Error al generar token'));
      } else {
        res.json(Responses.success(`Bearer ${token}`));
      }
    });
  },
  
  extraerToken: (req, res, next) => {
    const bearerHeader = req.headers['token']; // Para que pueda extrer correctamente el token, el header debe tener esta key

    if (bearerHeader){
      const tokenHeader = bearerHeader.split(' ')[1];
      req.token = tokenHeader;
      next();
    } else {
      res.json(Responses.forbidden());
    }
  },

  verificarToken: (req, res, next) => {
    jwt.verify(req.token, 'mysecretkey', (error, authData) => {
      if (error){
        res.json(Responses.forbidden());
      } else {
        req.usuario = authData.usuario
        next();
      }
    });
  }
};