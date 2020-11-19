'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlumnoMateria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AlumnoMateria.init({
    alumno: DataTypes.INTEGER,
    materia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AlumnoMateria',
    tableName: 'AlumnosMaterias',
    timestamps: false,
  });

  AlumnoMateria.associate = (models) => {
    AlumnoMateria.belongsTo(models.Usuario, {foreignKey: 'alumno'})
    AlumnoMateria.belongsTo(models.Materia, {foreignKey: 'materia'})
  }

  return AlumnoMateria;
};