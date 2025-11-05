const { createRequestHandler } = require('@react-router/node');

module.exports = createRequestHandler(
  // build path
  './build/server/index.js'
);