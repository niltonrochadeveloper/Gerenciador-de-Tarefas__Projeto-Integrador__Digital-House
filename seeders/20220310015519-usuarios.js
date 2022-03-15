'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'Nilton Rocha',
      sobre: 'Full Stack Developer',
      email: 'jornalista.nilton@gmail.com',
      senha: '123',
      nivelId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Usuario',
      sobre: 'Um usuário Comum',
      email: 'nilton.silva@grupocard.com.br',
      senha: '123',
      nivelId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
      
    await queryInterface.bulkDelete('Usuarios', null, {});
     
  }
};
