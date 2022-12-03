const express = require('express');
const router = express.Router();

const creds = require('./creds');
const pool = require('./pool');

router.use('/creds', creds);
router.use('/pool', pool);

module.exports = router;
