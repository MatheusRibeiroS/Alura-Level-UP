import {
  describe, expect, it, jest,
} from '@jest/globals';
import CreateUser from '../../use-cases/create-user';
import accountRepository from '../../repository/account.repository';
import DatabaseConnection from '../../infra/database-connection';

describe("test user creation", () => {

  const mockRepository = {
    list: () => [],
    save: jest.fn(),
  };

  // test user creation without the database connection (mocked)

  it("should return the mock created user", async () => {

    const createUser = new CreateUser(mockRepository);

    const userMock = await createUser.execute({
      name: "Matheus Ribeiro",
      email: "matheusribeiros@gmail.com",
      password: "12345678",
    });

    expect(userMock).toStrictEqual({
      id: expect.any(String),
      name: "Matheus Ribeiro",
      email: "matheusribeiros@gmail.com",
      creation_date: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
    })
  })

  // teste user creation going through the wholem process of creatiing, validating and saving on the database
  it("should return the created and saved in database user", async () => {

    const url = process.env.MONGODB_URL;
    const database = process.env.MONGODB_DATABASE;

    const connection = await DatabaseConnection.createConnection({ url, database });

    const repository = new accountRepository(connection);

    const createUser = new CreateUser(repository);

    const userMock = await createUser.execute({
      name: "Matheus Ribeiro",
      email: "matheusribeiros@gmail.com",
      password: "12345678",
    });

    expect(userMock).toStrictEqual({
      id: expect.any(String),
      name: "Matheus Ribeiro",
      email: "matheusribeiros@gmail.com",
      creation_date: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
    })
  })
})

