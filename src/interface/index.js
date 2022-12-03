const express = require('express');
const router = express.Router();

const creds = require('./creds');

router.use('/creds', creds);

module.exports = router;
