const axios = require('axios');
const config = require('../config');

const api = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${config.MONITE_TOKEN}`,
    'x-monite-version': '2024-01-31',
    'x-monite-entity-id': config.MONITE_ENTITY_ID,
    'Content-Type': 'application/json'
  }
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API Error:', {
        status: error.response.status,
        data: error.response.data
      });
    }
    return Promise.reject(error);
  }
);

module.exports = api;