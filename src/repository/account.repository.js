import saveOnFile from "./save-on-file.js";
import readFromFile from "./read-from-file.js";

export default class AccountRepository {
  save(account) {
    saveOnFile(account);
  }

  list() {
    return readFromFile();
  }
}