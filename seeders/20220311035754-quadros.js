'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Quadros', [{
      titulo: 'Novas Demandas',
      descricao: 'As Novas Demandas serão inseridas aqui',
      areaId: '1',
      tarefaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Em Andamento',
      descricao: 'Em Andamento',
      areaId: '1',
      tarefaId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Concluídas',
      descricao: 'As Demandas Concluídas ficarão com status concluído e finalizadas. Além de sair da lista de tarefas pendentes',
      areaId: '1',
      tarefaId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Quadros', null, {});
    
  }
};
