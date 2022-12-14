const { github, account, cert } = require("../../domain");
const { validator } = require("../middleware");
const { Joi, validate } = validator;

const verifyValidation = {
  body: Joi.object({
    nonce: Joi.number().required(),
    accessToken: Joi.string().required(),
    contractAddress: Joi.string().required(),
    address: Joi.string().required(),
    message: Joi.string().required(),
    signature: Joi.string().required(),
  }),
};

async function verify(req, res) {
  let { accessToken, nonce, address, message, signature, contractAddress } = req.body;

  const githubVerifiedData = await github.verify({
    accessToken,
  });

  console.log(githubVerifiedData);

  const accountVerifiedData = await account.verify({
    address,
    message,
    signature,
  });

  const createdCert = await cert.create({
    address: accountVerifiedData.address,
    username: githubVerifiedData.username,
    nonce,
    contractAddress,
  });

  res.json(createdCert);
}

module.exports = [validate(verifyValidation), verify];
