export default class FindAllUsersRequest {
  #userRepository;

  constructor(userRepository) {
    this.#userRepository = userRepository;
  }

  async execute(_request, response) {
    try  {
      const users = await this.#userRepository.list();
      return response.status(200).send({ message: `Accounts found!`, usersArray: users});
    } catch (error) {
      return response.status(404).send({ error: error.message, message: `Cannot find accounts` });
    } 
  }
}