const router = require('express').Router();
const { AccentFeature } = require('../db/models');

module.exports = router;

router.get('/:name', async (req, res, next) => {
  try {
    const accentFeature = await AccentFeature.findOne({
      where: {
        name: req.params.name
      }
    });
    res.status(200).json(accentFeature);
  } catch (error) {
    console.error(error);
  }
});
