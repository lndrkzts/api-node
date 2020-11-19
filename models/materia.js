'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Materia.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'El nombre no puede ser nulo'
        }
      }
    },
    cuatrimestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El cuatrimestre no puede ser nulo'
        },
        isInt: {
          args: true,
          msg: 'El cuatrimestre debe ser un numero'
        },
        min: {
          args: 1,
          msg: 'El cupo debe ser mayor o igual a 1'
        },
        max: {
          args: 4,
          msg: 'El cupo debe ser menor o igual a 4'
        }
      }
    },
    cupos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El cupo no puede ser nulo'
        },
        isInt: {
          args: true,
          msg: 'El cupo debe ser un numero'
        },
        min: {
          args: 1,
          msg: 'El cupo debe ser mayor o igual a 1'
        },
        max: {
          args: 100,
          msg: 'El cupo debe ser menor o igual a 100'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Materia',
    tableName: 'Materias',
    timestamps: false,
  });

  Materia.associate = (models) => {
    Materia.belongsToMany(models.Usuario, { through: 'AlumnoMateria', foreignKey: 'materia', as: 'materia' });
  };

  return Materia;
};