import bcrypt from 'bcryptjs';
/**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
const isValidEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};
  
    /**
     * validatePassword helper method
     * @param {string} password
     * @returns {Boolean} True or False
     */
const validatePassword = (password) => {
    if (password.length <= 5 || password === '') {
      return false;
    } return true;
};


/**
 * validatePassword helper method
 * @param {string} phoneNumber
 * @returns {Boolean} True or False
 */
const validatePhoneNumber = (phoneNumber) => {
    const phoneno = /^\d{10}$/;
    if (!String(phoneNumber).match(phoneno)) {
        return false;
    } return true;
};

/**
 * isEmpty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const isEmpty = (input) => {
    if (input === undefined || input === '') {
      return true;
    }
    if (input.replace(/\s/g, '').length) {
      return false;
    } return true;
};
  
const comparePassword = (hashedPassword, password) => {
    return bcrypt.compareSync(password, hashedPassword);
};


  export {
    isValidEmail,
    validatePassword,
    isEmpty,
    validatePhoneNumber,
    comparePassword
  };