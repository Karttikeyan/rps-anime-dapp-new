const { createRequestHandler } = require('@react-router/node');

module.exports = createRequestHandler(
  './build/server/index.js'
);