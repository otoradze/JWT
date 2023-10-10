const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const user = jwt.verify(token, 'your-secret-key');
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "invalid token" });
  }
};

module.exports = authenticateToken;