import 'dotenv/config'; // import environment variables (it needs to be the first import)
import saveOnFile from "./save-on-file.js";
import readFromFile from "./read-from-file.js";

const accountsPath = process.env.STORAGE_FILE_PATH;

export default class AccountRepository {
  save(account) {
    saveOnFile(account, accountsPath);
  }

  list() {
    return readFromFile(accountsPath);
  }
}