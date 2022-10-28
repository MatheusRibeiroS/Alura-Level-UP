import validateIfEmailAlreadyExists from "./validate-if-email-exists.validator.js";

export default async function createAccountValidator(values) {
  let errorLog = {};
  let errors = [];

  let errorsObject = {};

  if (!values.name) {
    errors.push({
      field: 'name',
      message: 'the name field cannot be empty',
    });
  }

  if (!values.password) {
    errors.push({
      field: 'password',
      message: 'Password is required',
    });
  } else if (values.password.length < 8) {
    errors.push({
      field: 'password',
      message: 'Password must have at least 8 characters',
    });
  }

  if (!values.email) {
    errorsObject.field = 'email';
    errorsObject.message = 'Email is required';
    errors.push(errorsObject);
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.push({
      field: 'email',
      message: 'Email address is invalid',
    });
  }
  

  // verify if the account email already exists
  const existsEmail = await validateIfEmailAlreadyExists(values.email);
  if (existsEmail) {
    errors.push(existsEmail);
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