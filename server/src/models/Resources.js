const { Model, DataTypes } = require('sequelize')

class Resources extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      type: DataTypes.STRING
    }, {
      sequelize,
    })
  }
}

module.exports = Resources
