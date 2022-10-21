import fs, { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';


export async function save(user) {
  if (!existsSync('./data/accounts.json') || fs.statSync('./data/accounts.json').size === 0) {
    await writeFile('./data/accounts.json', JSON.stringify([user]));
    return
  }

  const data = await readFile('./data/accounts.json', 'utf-8');

  if (data) {
    const accounts = JSON.parse(data);
    accounts.push(user);
    await writeFile('./data/accounts.json', JSON.stringify(accounts));
  } else {
    await writeFile('./data/accounts.json', JSON.stringify([user]));
  }

  return user;
}

export async function list() {
  // read objects from accounts.json file, transform to json format and return
  let accounts = [];
  try {
  accounts = JSON.parse(await readFile('data/accounts.json', 'utf8'));
  } catch (error) {
    console.log('accounts.json file empty or not found');
  }
  return accounts;
}