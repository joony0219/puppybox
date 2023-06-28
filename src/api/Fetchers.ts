import axios from "axios";

export default async function getDog() {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  return response.data.message;
}
