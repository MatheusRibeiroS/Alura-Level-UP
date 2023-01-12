import axios from "axios";
export default async function getUsersStories() {
  // const teste = axios.get("http://localhost:3000/stories").then((response) => {
  //   console.log("response", response);
  //   return response;
  // });
  // console.log("teste", teste);
  const stories = await axios.get("http://localhost:3000/stories");
  return stories.data;
}
