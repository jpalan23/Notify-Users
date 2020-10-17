import dbQuery from '../db/dbQuery';
import { validatePassword, isEmpty , isValidEmail, comparePassword}  from '../helpers/validation';
import { generateToken } from '../middlewares/auth';
import { errorMessage, successMessage, status } from '../helpers/status';

const signInAdmin = async (req, res) =>{
    const {email, password} = req.body;
    if(isEmpty(email) || isEmpty(password)){
        errorMessage.error = 'Email, Password cannot be empty';
        return res.status(status.bad).send(errorMessage);
    }
    if(!isValidEmail(email)){
        errorMessage.error = 'Email incorrect';
        return res.status(status.bad).send(errorMessage);
    }
    if(!validatePassword(password)){
        errorMessage.error = 'Password needs to be more than 5';
        return res.status(status.bad).send(errorMessage);
    }

    // const hashPassword = bcrypt.hashSync(password);
    const signInQuery = 'Select * from users where email = $1';
    try {
        const { rows } = await dbQuery.query(signInQuery, [email]);
        const dbresult = rows[0];
        if(!dbresult){
            errorMessage.error = 'Email not found';
            return res.status(status.notfound).send(errorMessage);
        }
        // console.log(dbresult);
        if(!comparePassword(dbresult.password, password)){
            errorMessage.error = 'Password Inncorect';
            return res.status(status.notfound).send(errorMessage);
        }
        console.log('Password matched');
        const token = generateToken(dbresult.email);
        // console.log(token);
        successMessage.data = dbresult.email;
        successMessage.token = token;
        return res.status(status.success).send(successMessage);
        
    } catch (error) {
        console.error(error);
        errorMessage.error = 'Operation was not successful';
        return res.status(status.error).send(errorMessage);
    }
}

const notifyUsers = async (req, res) =>{

}

export {signInAdmin}