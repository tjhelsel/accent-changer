const Transcription = require('./transcription');
const Accent = require('./accent');

Accent.hasMany(Transcription);
Transcription.belongsTo(Accent);

module.exports = {
  Transcription,
  Accent
};
