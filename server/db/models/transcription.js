const Sequelize = require('sequelize');
const db = require('../db');

const Transcription = db.define('transcription', {
  string: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  accent: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'General American',
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
  },
  audioUrl: {
    type: Sequelize.STRING
  }
});

module.exports = Transcription;
