const router = require('express').Router();
const { Accent } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const accents = await Accent.findAll();
    res.status(200).json(accents);
  } catch (error) {
    next(error);
  }
});

router.get('/:name', async (req, res, next) => {
  try {
    const accent = await Accent.findOne({
      where: {
        name: req.params.name
      }
    });
    res.status(200).json(accent);
  } catch (error) {
    next(error);
  }
});
