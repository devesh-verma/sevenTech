const util = require('util');

module.exports.Logger = {
  debug: function (config, message, data = {}) {
    console.debug("ENV::", config.stage, "LEVEL:: debug", "message:", message, util.inspect(data, false, 2));
  },
  error: function (config, message, data = {}) {
    console.error("ENV::", config.stage, "LEVEL:: error", "message:", message, util.inspect(data, false, Infinity));
  },
  info: function (config, message, data = {}) {
    console.info("ENV::", config.stage, "LEVEL:: info", "message:", message, util.inspect(data, false, 3));
  },
  warn: function (config, message, data = {}) {
    console.warn("ENV::", config.stage, "LEVEL:: warn", "message:", message, util.inspect(data));
  }
}
