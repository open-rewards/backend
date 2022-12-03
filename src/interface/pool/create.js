const { validator } = require("../middleware");
const { Joi, validate } = validator;
const NodeCache = require('node-cache');
const repoNameMapping = new NodeCache();
const contractAddressMapping = new NodeCache();

const createValidation = {
  body: Joi.object({
    repoUrl: Joi.string().required(),
    username: Joi.string().required(),
    userAddress: Joi.string().required(),
    repoName: Joi.string().required(),
    contractAddress: Joi.string().required(),
    safeContractAddress: Joi.string().required(),
    contributors: Joi.number().required(),
    stars: Joi.number().required(),
  }),
};

async function create(req, res) {
  let {
    repoUrl,
    repoName,
    contributors,
    stars,
    username,
    userAddress,
    contractAddresss,
    safeContractAddress,
  } = req.body;
  res.json({
    repoUrl,
    repoName,
    contributors,
    stars,
    username,
    userAddress,
    contractAddresss,
    safeContractAddress,
  });
}

module.exports = [validate(createValidation), create];
