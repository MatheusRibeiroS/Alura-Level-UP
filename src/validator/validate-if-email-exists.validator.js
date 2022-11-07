import AccountRepository from "../repository/account.repository.js";

export default async function validateIfEmailAlreadyExists(email, database) {
  let errorsObject = {};
  const accountRepository = new AccountRepository(database);
  const accounts = await accountRepository.list();
  let emailExists = accounts.some(account => account.email === email);

  if (emailExists) {
    errorsObject.field = 'email';
    errorsObject.message = 'Email already exists';
  }
  return Object.entries(errorsObject).length > 0 ? errorsObject : null;
}