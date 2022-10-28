import readFromFile from "../../data/read-from-file.js";

export default async function validateIfEmailAlreadyExists(email) {
  let errorsObject = {};
  const accounts = await readFromFile();
  let emailExists = accounts.some(account => account.email === email);

  if (emailExists) {
    errorsObject.field = 'email';
    errorsObject.message = 'Email already exists';
  }
  return Object.entries(errorsObject).length > 0 ? errorsObject : null;
}