const Transcription = require('./transcription');
const Accent = require('./accent');
const AccentFeature = require('./accentFeauture');

Accent.hasMany(AccentFeature);
AccentFeature.hasMany(AccentFeature);

module.exports = {
  Transcription,
  Accent,
  AccentFeature
};
