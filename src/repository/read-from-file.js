import { readFile } from 'fs/promises';

export default async function readFromFile(path) {
  // read objects from accounts.json file, transform to json format and return
  let accounts = [];
  try {
    accounts = JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    console.log('accounts.json file empty or not found');
  }
  return accounts;
}