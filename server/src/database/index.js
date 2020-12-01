const Sequelize = require('sequelize');
const configuration = require('../config/database')

// Import Models
const Resources = require('../models/Resources')

const connection = new Sequelize(configuration)

Resources.init(connection);

module.exports = connection

