import axios from "axios";

export default async function getUsersAccounts() {
  const users = await axios.get("http://localhost:4000/accounts");
  return users.data.usersArray;
}