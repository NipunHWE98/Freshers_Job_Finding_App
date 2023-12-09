import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  console.log(token);

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized kk Please login' });
  }

  try {
    const jwtSecret = process.env.JWT_SECREAT || 'defaultSecretKey';
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Unauthorized Please login' });
  }
};

export default validateToken;