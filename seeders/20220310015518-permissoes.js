'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Permissoes', [{
      nivel: 'Admin',
      descricao: 'Este usuário é um Super Administrador',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nivel: 'Moderador',
      descricao: 'Este é um usuário Moderador',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nivel: 'Usuario',
      descricao: 'Este é um usuário Comum',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Permissoes', null, {});
    
  }
};
