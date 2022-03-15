'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      conteudo: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      prazo: {
        type: Sequelize.DATE
      },
      quadroId: {
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.INTEGER
      },
      tagId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarefas');
  }
};