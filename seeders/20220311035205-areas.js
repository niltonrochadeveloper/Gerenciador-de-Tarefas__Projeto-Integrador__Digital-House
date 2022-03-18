'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Areas', [{
      titulo: 'Primeira Área',
      descricao: 'Primeira Área',
      link: '/primeira-area',
      usuarioId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Segunda Área',
      descricao: 'Segunda Área',
      link: '/segunda-area',
      usuarioId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
 
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Areas', null, {});
    
  }
};
