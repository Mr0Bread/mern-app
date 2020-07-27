const express = require('express');
const router = express.Router();

const MeteoDataController = require('../Controllers/MeteoData/MeteoData.controller');

router.get('/', (req, res) => {
    const meteoDataController = new MeteoDataController();
    res.send({msg: 'Parsing'});
});

module.exports = router;