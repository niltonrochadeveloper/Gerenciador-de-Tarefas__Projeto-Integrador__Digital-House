'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arquivos extends Model {
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
    }
  }
  Arquivos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    link: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
    tarefaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Arquivos',
  });
  return Arquivos;
};