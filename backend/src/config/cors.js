const { env } = require("./env");

const corsOptions = {
  origin: env.CORS_ORIGIN,
  credentials: true,
};

module.exports = { corsOptions };