require('dotenv').config();

module.exports = {
  API_BASE_URL: 'https://api.sandbox.monite.com/v1',
  PORT: process.env.PORT || 3000,
  MONITE_TOKEN: process.env.MONITE_TOKEN,
  MONITE_ENTITY_ID: process.env.MONITE_ENTITY_ID
};