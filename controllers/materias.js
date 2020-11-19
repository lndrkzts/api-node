const Materia = require('../models').Materia
const AlumnoMateria = require('../models').AlumnoMateria
const Responses = require('../utils/responses');

module.exports = {
	crear: (req, res) => {
		Materia.create({
			nombre: req.body.materia ? req.body.materia.toLowerCase() : null,
			cuatrimestre: req.body.cuatrimestre,
			cupos: req.body.cupos,
		}).then(result => {
			res.json(Responses.success('Materia creada correctamente'));
		}).catch(error => {
			res.json(Responses.badRequest(error.errors[0].message));
		});
	},

	verificarCupo: async (req, res, next) => {
		materia = await Materia.findOne({
			where: { id: req.params.idMateria }
		});

		cantidadAlumnos = await AlumnoMateria.count({
			where: { materia: materia.id }
		});

		if (materia.cupos > cantidadAlumnos){
			next();
		} else {
			res.json(Responses.badRequest('Se alcanzo el cupo maximo'));
		}
	}
};