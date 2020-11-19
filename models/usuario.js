'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'El mail no puede ser nulo'
        },
        isEmail: {
          args: true,
          msg: 'El mail debe ser valido'
        }
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'El nombre no puede ser nulo'
        },
        notIn: {
          args: [[' ']],
          msg: 'El nombre no debe contener espacios'
        }
      }
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'La clave no puede ser nula'
        },
        len: {
          args: [4, 255],
          msg: 'La clave debe tener entre 4 y 255 caracteres'
        }
      }
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El tipo no puede ser nulo'
        },
        esValido(value){
          if (!['alumno', 'profesor', 'admin'].includes(value))
            throw new Error('El tipo debe ser alumno, profesor, o admin');
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
    timestamps: false,
  });

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Peticion, { as: 'peticiones' });
  };

  Usuario.associate = (models) => {
    Usuario.belongsToMany(models.Materia, { through: 'AlumnoMateria', foreignKey: 'alumno', as: 'alumno' });
  };

  return Usuario;
};