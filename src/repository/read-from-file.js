import fs, { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import save from './save-on-file.js';

const accountsPath = './data/accounts.json';

export default async function readFromFile() {
  // read objects from accounts.json file, transform to json format and return
  let accounts = [];
  try {
    accounts = JSON.parse(await readFile(accountsPath, 'utf8'));
  } catch (error) {
    console.log('accounts.json file empty or not found');
  }
  return accounts;
}