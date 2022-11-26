
export default async function validateIfEmailAlreadyExists(email, repository) {
  let errorsObject = {};
  const accounts = await repository.list();
  let emailExists = accounts.some(account => account.email === email);

  if (emailExists) {
    errorsObject.field = 'email';
    errorsObject.message = 'Email already exists';
  }
  return Object.entries(errorsObject).length > 0 ? errorsObject : null;
}