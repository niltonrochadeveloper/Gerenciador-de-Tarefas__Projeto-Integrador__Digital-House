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
        foreignKey: 'usuarioId',
        as: "usuarios"
      })
      this.belongsTo(models.Tags, {
        foreignKey: 'tagId',
        as: "tags"
      })
      this.belongsTo(models.Rascunhos, {
        foreignKey: 'rascunhoId',
        as: "rascunhos"
      })
      this.hasMany(models.Comentarios, {
        foreignKey: "tarefaId",
        as: "comentarios"
      })
    }
  }
  Tarefas.init({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    link: DataTypes.STRING,
    prazo: DataTypes.DATE,
    quadroId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    rascunhoId: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Tarefas',
  });
  return Tarefas;
};