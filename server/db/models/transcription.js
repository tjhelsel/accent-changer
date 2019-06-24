const Sequelize = require('sequelize');
const db = require('../db');

const Transcription = db.define('transcription', {
  word: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  dictPron: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  accentedPron: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  audioUrl: {
    type: Sequelize.STRING
  }
});

module.exports = Transcription;
