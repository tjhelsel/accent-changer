const Sequelize = require('sequelize');
const db = require('../db');

const Accent = db.define('accent', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  subChars: {
    type: Sequelize.VIRTUAL,
    get() {
      const subChars = Object.keys(this.subs);
      return subChars.sort((a, b) => b.length - a.length);
    }
  },
  subs: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

module.exports = Accent;
