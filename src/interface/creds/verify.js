const { github, account, cert } = require("../../domain");
const { validator } = require("../middleware");
const { Joi, validate } = validator;

const verifyValidation = {
  body: Joi.object({
    nonce: Joi.number().required(),
    code: Joi.string().required(),
    address: Joi.string().required(),
    message: Joi.string().required(),
    signature: Joi.string().required(),
  }),
};

async function verify(req, res) {
  let { code, nonce, address, message, signature } = req.body;

  const githubVerifiedData = await github.verify({
    code,
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
  });

  res.json(createdCert);
}

module.exports = [validate(verifyValidation), verify];
