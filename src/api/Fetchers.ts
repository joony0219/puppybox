import axios from "axios";

export default async function getDog() {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
  return response.data.message;
}
