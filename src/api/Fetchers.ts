import axios from "axios";

export async function getDogFirst() {
  const response = await axios.get(
    "https://dog.ceo/api/breeds/image/random/15"
  );
  return response.data.message;
}

export async function getDog() {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random/6");
  return response.data.message;
}
