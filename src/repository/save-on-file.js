import fs, { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';

const accountsPath = './data/accounts.json';

export default async function saveOnFile(user) {
  if (!existsSync(accountsPath) || fs.statSync(accountsPath).size === 0) {
    await writeFile(accountsPath, JSON.stringify([user]));
    return
  }

  const data = await readFile(accountsPath, 'utf-8');

  if (data) {
    const accounts = JSON.parse(data);
    accounts.push(user);
    try {
      await writeFile(accountsPath, JSON.stringify(accounts));
    } catch (error) {
      console.log('error saving account');
    }
  } else {
    try {
    await writeFile(accountsPath, JSON.stringify([user]));
    } catch (error) {
      console.log('error saving account');
    }
  }

  return user;
}