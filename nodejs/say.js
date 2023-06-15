const _ = require("lodash");
const now = new Date();

module.exports.date = now;

module.exports.data = _.compact([0, 1, false, 2, '', 3]);