const Sequelize = require('sequelize');
const db = require('..');

const Articulation = db.define('articulation', {
  mw: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  ipa: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Articulation;
