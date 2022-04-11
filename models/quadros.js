'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quadros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Areas, {
        foreignKey: 'areaId'
      })
      this.hasMany(models.Tarefas, {
        foreignKey: 'quadroId',
        as: 'tarefas'
      })
    }
  }
  Quadros.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    areaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quadros',
  });
  return Quadros;
};