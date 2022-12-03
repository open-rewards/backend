const { validator } = require("../middleware");
const { Joi, validate } = validator;
const NodeCache = require('node-cache');
const repoNameMapping = new NodeCache();
const contractAddressMapping = new NodeCache();

const createValidation = {
  query: Joi.object({
    repoName: Joi.string().required(),
    contractAddress: Joi.string().required(),
  }),
};

async function create(req, res) {
  let { repoName, contractAddresss } = req.body;
  repoNameMapping.set(repoName, contractAddresss);
  contractAddressMapping.set(contractAddresss, repoName);
  res.json({ repoName, contractAddresss });
}

module.exports = [validate(createValidation), create];
