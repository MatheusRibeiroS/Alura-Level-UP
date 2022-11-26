export default class RemoveAccountRequest {
  #accountRepository;

  constructor(accountRepository) {
    this.#accountRepository = accountRepository;
  }

  async execute(request, response) {
    try {
      const id = request.params.id;
      // find one account by id
        await this.#accountRepository.delete(id);
        return response.status(200).send({ message: `Account with id: ${id} removed` });

    } catch (error) {
      console.log(error);
      return response.status(500).send({ message: error.message });
    }
  }
}