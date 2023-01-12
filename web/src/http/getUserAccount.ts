import axios from "axios";

export default async function getUserAccount(id: string) {
  const user = await axios.get("http://localhost:4000/account/" + id);
  return user.data.user;
}