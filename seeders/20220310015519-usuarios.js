'use strict';

var bcrypt = require ('bcryptjs')
var salt = bcrypt.genSaltSync(10)
var minhaSenha = "123"
var hash = bcrypt.hashSync(minhaSenha, salt)

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'Nilton Rocha',
      sobre: 'Full Stack Developer',
      email: 'jornalista.nilton@gmail.com',
      senha: hash,
      nivelId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Usuario',
      sobre: 'Um usuário Comum',
      email: 'nilton.silva@grupocard.com.br',
      senha: hash,
      nivelId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
      
    await queryInterface.bulkDelete('Usuarios', null, {});
     
  }
};
