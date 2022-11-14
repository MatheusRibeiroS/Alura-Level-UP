
export default class createAccountValidator {

  constructor(values) {
    this.values = values;
  }

  async #validatePublicationContent(content, errors) {
    if (!content) {
      errors.push({
        field: 'content',
        message: 'the content field cannot be empty',
      });
    }
    return null;
  }

  async #validateAuthorName(name, errors) {
    if (!name) {
      errors.push({
        field: 'name',
        message: 'the name field cannot be empty',
      });
    }
    return null;
  }

  async execute(values) {
    const { title, author, content } = values;

    let errorsLog = {
      temErro: false,
      errors: [],
      data: {},
    }


    await this.#validatePublicationContent(content, errorsLog.errors);

    await this.#validateAuthorName(author, errorsLog.errors);

    if (errorsLog.errors.length > 0) {
      errorsLog.temErro = true;
    } else {
      errorsLog.temErro = false;
    }

    errorsLog.data = values;
    return errorsLog;
  }
}