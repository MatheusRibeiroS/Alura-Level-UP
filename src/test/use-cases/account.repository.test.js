import { save, list } from '../../../data/account.repository.js';
import { createUser } from '../../use-cases/create-user.js';
import { describe, it, expect } from '@jest/globals';

//to test the user creation + save account and list account, use the command: npm run test
describe("Create user, save and show stored accounts", () => {

  // test creation with mock user1 data
  let user1;
  it("should create a user", async () => {
    user1 = createUser('Matheus dos Santos Ribeiro Silva', 'matheusribeiro@gmail.com', '123456');

    expect(user1).toHaveProperty("id");
    expect(user1).toHaveProperty("name", "Matheus dos Santos Ribeiro Silva");
    expect(user1).toHaveProperty("email", "matheusribeiro@gmail.com");
    expect(user1).toHaveProperty("password", "123456");
    expect(user1).toHaveProperty("creation_date");
  })

  it("should save user1 and show stored accounts", async () => {
    const saveUser1 = await save(user1);

    console.log("user 1", saveUser1);

    const users = await list();
    console.log("stored users:", users);
  }
  )

  // test creation with mock user2 data
  let user2;
  it("should create a user", async () => {
    user2 = createUser('Maria', 'maria@gmail.com', '7654321');

    expect(user2).toHaveProperty("id");
    expect(user2).toHaveProperty("name", "Maria");
    expect(user2).toHaveProperty("email", "maria@gmail.com");
    expect(user2).toHaveProperty("password", "7654321");
    expect(user2).toHaveProperty("creation_date");
  })


  it("should save user2 and show stored accounts", async () => {
    const saveUser2 = await save(user2);

    console.log("user 2", saveUser2);

    const users = await list();
    console.log("stored users:", users);
  }
  )
});
