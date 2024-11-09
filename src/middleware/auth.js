const config = require('../config');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: {
        message: 'Missing or invalid authorization header'
      }
    });
  }

  const token = authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      error: {
        message: 'Missing token'
      }
    });
  }

  // Add token to request for downstream use
  req.token = token;
  next();
};

module.exports = authMiddleware;