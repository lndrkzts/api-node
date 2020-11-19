const AlumnoMateria = require('../models').AlumnoMateria
const Responses = require('../utils/responses');

module.exports = {
	crear: (req, res) => {
		console.log(req.usuario.id);
		console.log(req.params.idMateria);

		AlumnoMateria.create({
			alumno: req.usuario.id,
			materia: req.params.idMateria,
		}).then(result => {
			res.json(Responses.success('Alumno inscripto correctamente'));
		}).catch(error => {
			res.json(Responses.badRequest(error.errors[0].message));
		});
	}
};