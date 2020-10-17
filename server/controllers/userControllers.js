import dbQuery from '../db/dbQuery';
import {
    isEmpty,
    isValidEmail,
    validatePhoneNumber
} from '../helpers/validation';
import {
    errorMessage,
    successMessage,
    status
} from '../helpers/status';

export const subscribeUser = async (req, res) => {
    const {
        name,
        email,
        phoneNumber
    } = req.body;
    if (isEmpty(email) || isEmpty(name) || isEmpty(phoneNumber)) {
        errorMessage.error = 'Email, Name and Phonenumber required';
        return res.status(status.bad).send(errorMessage);
    }
    if (!validatePhoneNumber(phoneNumber)) {
        errorMessage.error = 'PhoneNumber incorrect';
        return res.status(status.bad).send(errorMessage);
    }
    if (!isValidEmail(email)) {
        errorMessage.error = 'Email incorrect';
        return res.status(status.bad).send(errorMessage);
    }
    try {
        const createUserQuery = `INSERT INTO 
        users(email, name, phone_number)
        VALUES($1, $2, $3)
        returning *`;
        const values = [
            email,
            name,
            phoneNumber
        ];
        // console.log(createUserQuery);
        // console.log(values);
        const { rows } = await dbQuery.query(createUserQuery, values);
        const dbResponse = rows[0];
        successMessage.data = dbResponse
        return res.status(status.created).send(successMessage);

    } catch (error) {
        console.log(error);
        if (error.routine === '_bt_check_unique') {
            errorMessage.error = 'User with that EMAIL already exist';
            return res.status(status.conflict).send(errorMessage);
        }
        errorMessage.error = 'Operation was not successful';
        return res.status(status.error).send(errorMessage);
    }
}