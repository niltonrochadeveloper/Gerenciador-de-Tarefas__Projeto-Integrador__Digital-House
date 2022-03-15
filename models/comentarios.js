'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId'
      })
      this.belongsTo(models.Tarefas, {
        foreignKey: 'tarefaId'
      })
      this.belongsTo(models.Arquivos, {
        foreignKey: 'arquivoId'
      })
    }
  }
  Comentarios.init({
    conteudo: DataTypes.STRING,
    link: DataTypes.STRING,
    arquivoId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    tarefaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comentarios',
  });
  return Comentarios;
};