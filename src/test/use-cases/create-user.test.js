import { createUser } from "../../use-cases/create-user.js";
import { describe, it, expect } from '@jest/globals';

// to test the create user function use the command: npm run test
describe("Create user", () => {

  // test creation with mock user1 data
  it("should create a user", () => {
    const user1 = createUser('Matheus dos Santos Ribeiro Silva', 'matheusribeiro@hotmail.com', '123456');

    expect(user1).toHaveProperty("id");
    console.log("id:", user1.id)
    expect(user1).toHaveProperty("name", "Matheus dos Santos Ribeiro Silva");
    console.log("name:", user1.name)
    expect(user1).toHaveProperty("email", "matheusribeiro@hotmail.com");
    console.log("email:", user1.email)
    expect(user1).toHaveProperty("password", "123456");
    console.log("password:", user1.password)
    expect(user1).toHaveProperty("creation_date");

    console.log("user 1", user1);
  })

  // test creation with mock user2 data

  it("should create a user", () => {
    const user2 = createUser('Maria', 'maria@gmail.com', '7654321');

    expect(user2).toHaveProperty("id");
    console.log("id:", user2.id)
    expect(user2).toHaveProperty("name", "Maria");
    console.log("name:", user2.name)
    expect(user2).toHaveProperty("email", "maria@gmail.com");
    console.log("email:", user2.email)
    expect(user2).toHaveProperty("password", "7654321");
    console.log("password:", user2.password)
    expect(user2).toHaveProperty("creation_date");

    console.log("user 2", user2);
  })
});