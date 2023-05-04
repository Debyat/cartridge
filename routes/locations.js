const express = require('express');
const router = express.Router();
const locations = require('../services/locations');

/* GET Locations. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await locations.getLocations());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;