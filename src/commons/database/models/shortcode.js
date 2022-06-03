/* eslint-disable @typescript-eslint/no-var-requires */
const { TABLES } = require('../naming');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shortcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shortcode.init({
    code: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: TABLES.SHORTCODE,
  });
  return Shortcode;
};