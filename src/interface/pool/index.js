const {
  asyncHandler,
  asyncHandlerArray,
} = require('../../infra/asyncHandler');
const express = require('express');
const router = express.Router();

const canCreate = require('../middleware/canCreate');
const canGet = require('../middleware/canGet');

const create = require('./create');
const get = require('./get');

router.post('/create', asyncHandler(canCreate), asyncHandlerArray(create));
router.get('/get', asyncHandler(canGet), asyncHandlerArray(get));

module.exports = router;
