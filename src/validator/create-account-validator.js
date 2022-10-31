import validateIfEmailAlreadyExists from "./validate-if-email-exists.validator.js";

export default class createAccountValidator {

  constructor(values) {
    this.values = values;
  }

  async #validateName(name, errors) {
    if (!name) {
      errors.push({
        field: 'name',
        message: 'the name field cannot be empty',
      });
    }

    return null;
  }

  async #validatePassword(password, errors) {
    if (!password) {
      return errors.push({
        field: 'password',
        message: 'Password is required',
      });
    }

    if (password.length < 8) {
      return errors.push({
        field: 'password',
        message: 'Password must have at least 8 characters',
      });
    }
    
    return null;
  }

  async #validateEmail(email, errors) {
    if (!email) {
      return errors.push({
        field: 'email',
        message: 'Email is required',
      });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return errors.push({
        field: 'email',
        message: 'Email address is invalid',
      });
    }

    // verify if the account email already exists
    const existsEmail = await validateIfEmailAlreadyExists(email);
    if (existsEmail) {
      return errors.push(existsEmail);
    }

    return null;
  }

  async execute(values) {
    const { name, email, password } = values;
    let errors = [];
    let errorLog = {};

    if (await this.#validateName(name, errors)) {
      errorLog.temErro = true;
      errorLog.data = errors;
    }

    
    if (await this.#validatePassword(password, errors)) {
      errorLog.data = errors;
    }

    if (await this.#validateEmail(email, errors)) {
      errorLog.temErro = true;
      errorLog.data = errors;
    }

    if (errors.length > 0) {
      errorLog.temErro = true;
    } else {
      errorLog.temErro = false;
    }

    errorLog.errors = errors;
    errorLog.data = values;

    return errorLog;
  }
}