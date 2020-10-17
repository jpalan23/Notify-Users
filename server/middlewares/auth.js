import jwt from 'jsonwebtoken';
import {
  errorMessage,
  status
} from '../helpers/status';
const generateToken = (email) => {
    const token = jwt.sign({email},process.env.TOKEN_SECRET);
    return token;
};
  
const authRequired =async (req, res, next) => {
    const token  = req.headers.authorization || req.headers['authorization'];
    console.log(token);
    if (!token) {
      errorMessage.error = 'Token not provided';
      return res.status(status.bad).send(errorMessage);
    }
    try {
      const decoded =  jwt.verify(token, process.env.TOKEN_SECRET);
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