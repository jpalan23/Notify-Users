import jwt from 'jsonwebtoken';

const generateToken = (email) => {
    const token = jwt.sign({email},process.env.TOKEN_SECRET);
    return token;
};
  
const authRequired =async (req, res, next) => {
    const token  = req.headers.authorization || req.headers['authorization'];
    if (!token) {
      errorMessage.error = 'Token not provided';
      return res.status(status.bad).send(errorMessage);
    }
    try {
      const decoded =  jwt.verify(token, env.secret);
      req.user = {
        email: decoded.email
      };
      console.log(req.user);
      next();
    } catch (error) {
      errorMessage.error = 'Authentication Failed';
      return res.status(status.unauthorized).send(errorMessage);
    }
  };
    
export{
    generateToken,
    authRequired
}