'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId'
      })
      this.belongsTo(models.Tags, {
        foreignKey: 'tagId'
      })
      this.belongsTo(models.Status, {
        foreignKey: 'statusId'
      })
    }
  }
  Tarefas.init({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    link: DataTypes.STRING,
    prazo: DataTypes.DATE,
    usuarioId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarefas',
  });
  return Tarefas;
};