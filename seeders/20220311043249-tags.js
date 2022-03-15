'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Tags', [{
      titulo: 'marketing',
      descricao: 'uma tarefa para o departamento de Marketing',
      areaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'produtos',
      descricao: 'uma tarefa para o departamento de produtos',
      areaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'ti',
      descricao: 'uma tarefa para o departamento de TI',
      areaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Tags', null, {});
    
  }
};
