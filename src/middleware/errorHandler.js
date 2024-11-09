const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Handle specific error types
  if (err.response) {
    // API error response
    return res.status(err.response.status).json({
      error: {
        message: err.response.data.message || 'API Error',
        details: err.response.data
      }
    });
  }

  if (err.request) {
    // Network error
    return res.status(503).json({
      error: {
        message: 'Service unavailable',
        details: 'Network error occurred'
      }
    });
  }

  // Default error response
  res.status(500).json({
    error: {
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }
  });
};

module.exports = errorHandler;