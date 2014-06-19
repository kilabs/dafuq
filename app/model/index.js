var fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  lodash = require('lodash'),
  config = require("../../config/config.json")[process.env.NODE_ENV || 'development'];
sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect, // or 'sqlite', 'postgres', 'mariadb'
  port: 3306, // or 5432 (for postgres)
});
db = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)