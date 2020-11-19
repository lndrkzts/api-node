'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peticion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Peticion.init({
    hora: DataTypes.DATE,
    ip: DataTypes.STRING,
    ruta: DataTypes.STRING,
    metodo: DataTypes.STRING,
    usuario: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Peticion',
    tableName: 'Peticiones',
    timestamps: false,
  });

  Peticion.associate = (models) => {
    Peticion.belongsTo(models.Usuario, { foreignKey: 'usuario' });
  };  

  return Peticion;
};