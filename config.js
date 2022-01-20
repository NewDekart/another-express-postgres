const env = process.env.NODE_ENV || "development";

const credentials = require(`./.credentials.${env}.js`);

module.exports = credentials;