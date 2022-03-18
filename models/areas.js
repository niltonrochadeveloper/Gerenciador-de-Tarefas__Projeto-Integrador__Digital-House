'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Areas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId',
        as: 'usuarios'
      })
      this.hasMany(models.Quadros, {
        foreignKey: 'areaId',
        as: 'quadros'
      })
    }
  }
  Areas.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    link: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Areas',
  });
  return Areas;
};