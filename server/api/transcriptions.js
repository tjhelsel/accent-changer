const router = require('express').Router();
const { Transcription } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const transcriptions = await Transcription.findAll();
    res.status(200).json(transcriptions);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const transcription = await Transcription.create({
      string: req.body.string,
      ipa: req.body.ipa,
      audioUrl: req.body.audioUrl,
      accent: req.body.accent
    });
    res.status(201).json(transcription);
  } catch (error) {
    console.error(error);
  }
});
