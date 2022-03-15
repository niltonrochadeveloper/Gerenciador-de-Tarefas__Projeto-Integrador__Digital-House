'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Comentarios', [{
      conteudo: 'primeiro comentário',
      link: '/:tarefaId/:usuarioId/:id',
      arquivoId: '1',
      usuarioId: '1',
      tarefaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      conteudo: 'primeiro comentário',
      link: '/:tarefaId/:usuarioId/:id',
      arquivoId: '2',
      usuarioId: '2',
      tarefaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      conteudo: 'primeiro comentário',
      link: '/:tarefaId/:usuarioId/:id',
      arquivoId: '3',
      usuarioId: '2',
      tarefaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      conteudo: 'primeiro comentário',
      link: '/:tarefaId/:usuarioId/:id',
      arquivoId: '4',
      usuarioId: '1',
      tarefaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Comentarios', null, {});
    
  }
};
