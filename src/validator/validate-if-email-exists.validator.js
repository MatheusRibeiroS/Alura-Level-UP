import { list } from "../../data/account.repository.js";

export default async function validateIfEmailAlreadyExists(email) {
  let errorsObject = {};
  const accounts = await list();

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i]?.email === email) {
      errorsObject.field = 'email';
      errorsObject.message = 'Email already exists';
    }
  }
  return Object.entries(errorsObject).length > 0 ? errorsObject : null;
}