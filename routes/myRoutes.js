const express = require('express');
const myControllers = require('../controllers/myController');

const router = express.Router();

router.post('/', myControllers.save);

module.exports = router;