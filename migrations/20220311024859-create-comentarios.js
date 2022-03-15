'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comentarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      conteudo: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      arquivoId: {
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER
      },
      tarefaId: {
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
    await queryInterface.dropTable('Comentarios');
  }
};

//muitos para muitos
