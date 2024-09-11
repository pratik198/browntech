const express = require('express');
const { logVisitorInfo } = require('../controllers/visitorController');
const router = express.Router();

router.post('/log', logVisitorInfo);

module.exports = router;
