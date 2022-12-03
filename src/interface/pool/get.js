const { pool } = require('../../domain');
const { validator } = require("../middleware");
const { Joi, validate } = validator;

const getValidation = {
  query: Joi.object({
    userAddress: Joi.string().required(),
  }),
};

async function get(req, res) {
  let { userAddress } = req.body;
  const data = await pool.get({ userAddress });
  res.json(data);
}

module.exports = [validate(getValidation), get];
