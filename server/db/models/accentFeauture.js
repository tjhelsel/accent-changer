const Sequelize = require('sequelize');
const db = require('../db');

const AccentFeature = db.define('accentFeature', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  subs: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

module.exports = AccentFeature;
