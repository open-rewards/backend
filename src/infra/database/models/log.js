const mongoose = require('mongoose');
const { Schema } = mongoose;

const _log = {};

_log.schema = new Schema({
  repoUrl: { type: String },
  repoName: { type: String },
  contributors: { type: Number },
  stars: { type: Number },
  username: { type: String },
  userAddress: { type: String, lowercase: true },
  contractAddress: { type: String, lowercase: true },
  safeContractAddress: { type: String },
  timeStamp: { type: Date, required: true, default: Date.now },
});

_log.schema.pre('save', function (next) {
  this.timeStamp = Date.now();
  next();
});

_log.schema.methods.safeObject = function () {
  const safeFields = [
    '_id',
    'repoUrl',
    'repoName',
    'contributors',
    'stars',
    'username',
    'userAddress',
    'contractAddress',
    'safeContractAddress',
    'timeStamp',
  ];
  const newSafeObject = {};
  safeFields.forEach((elem) => {
    // eslint-disable-next-line security/detect-object-injection
    newSafeObject[elem] = this[elem];
  });
  return newSafeObject;
};

_log.model = mongoose.model('logs', _log.schema);

module.exports = _log;
