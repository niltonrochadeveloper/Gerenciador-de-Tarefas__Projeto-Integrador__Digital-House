'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Status', [{
      titulo: 'Ativa',
      descricao: 'Tarefa Ativa',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Aguardando',
      descricao: 'Tarefa em Aguarde',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Inativa',
      descricao: 'Tarefa Inativa',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Concluída',
      descricao: 'Tarefa Concluída',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Status', null, {});
    
  }
};
