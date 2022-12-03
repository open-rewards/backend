const {
  asyncHandler,
  asyncHandlerArray,
} = require('../../infra/asyncHandler');
const express = require('express');
const router = express.Router();

const canVerify = require('../middleware/canVerify');

const verify = require('./verify');

router.post('/verify', asyncHandler(canVerify), asyncHandlerArray(verify));

module.exports = router;
