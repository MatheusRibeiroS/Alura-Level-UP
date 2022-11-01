import fs, { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';

export default async function saveOnFile(user, path) {
  if (!existsSync(path) || fs.statSync(path).size === 0) {
    writeFile(path, JSON.stringify([user]));
    return
  }

  const data = await readFile(path, 'utf-8');
  try {
    if (data) {
      const accounts = JSON.parse(data);
      accounts.push(user);
      writeFile(path, JSON.stringify(accounts));
    } else {
      writeFile(path, JSON.stringify([user]));
    }
  } catch (error) {
    console.log('error saving account');
  }
  return user;
}