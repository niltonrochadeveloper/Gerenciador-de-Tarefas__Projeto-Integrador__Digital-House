'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Permissoes, {
        foreignKey: 'nivelId',
        as: 'nivel'
      })
      this.hasMany(models.Areas, {
        foreignKey: 'usuarioId',
        as: 'areas'
      })
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    sobre: DataTypes.STRING,
    senha: DataTypes.STRING,
    nivelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};