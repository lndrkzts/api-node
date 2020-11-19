'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Peticiones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hora: {
        type: Sequelize.DATE
      },
      ip: {
        type: Sequelize.STRING
      },
      ruta: {
        type: Sequelize.STRING
      },
      metodo: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Usuarios',
          key: 'id',
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Peticiones');
  }
};