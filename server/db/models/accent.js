const Sequelize = require('sequelize');
const db = require('../db');

const Accent = db.define('accent', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Accent;
