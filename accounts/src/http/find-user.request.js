export default class FindUserRequest {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  async execute(request, response) {
    const id = request.params.id;
    // find one account by id
    try  {
      const user = await this.#userRepository.findOne(id);
      return response.status(200).send({ userId: id, message: `Account with id: ${id} found!`, user});
    } catch (error) {
      return response.status(404).send({ message: `Account with id: ${id} not found!` });
    } 
  }
}