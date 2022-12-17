export default class FindUserRequest {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  async execute(request, response) {
    const id = request.params.id;
    // find one account by id
    let user;
    try  {
      user = await this.#userRepository.findOne(id);
    } catch (error) {
      return response.status(404).send({ message: `Account with id: ${id} not found!` });
    }
      return response.status(200).send({ id: id, message: `Account with id: ${id} found!`});
  }
}