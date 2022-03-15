'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Tarefas', [{
      titulo: 'Primeira Tarefa',
      conteudo: 'Criar muitas outras tarefas',
      link: '/:quadroId/:id',
      prazo: new Date(),
      quadroId: '1',
      usuarioId: '1',
      tagId: '1',
      rascunhoId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Segunda Tarefa',
      conteudo: 'Crie Mais tarefas',
      link: '/:quadroId/:id',
      prazo: new Date(),
      quadroId: '1',
      usuarioId: '1',
      tagId: '1',
      rascunhoId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Terceira Tarefa',
      conteudo: 'Criar muitas outras tarefas',
      link: '/:quadroId/:id',
      prazo: new Date(),
      quadroId: '2',
      usuarioId: '1',
      tagId: '2',
      rascunhoId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Quarta Tarefa',
      conteudo: 'Criar muitas outras tarefas',
      link: '/:quadroId/:id',
      prazo: new Date(),
      quadroId: '3',
      usuarioId: '1',
      tagId: '1',
      rascunhoId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      titulo: 'Quinta Tarefa',
      conteudo: 'Criar muitas outras tarefas',
      link: '/:quadroId/:id',
      prazo: new Date(),
      quadroId: '3',
      usuarioId: '1',
      tagId: '2',
      rascunhoId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Tarefas', null, {});
    
  }
};
