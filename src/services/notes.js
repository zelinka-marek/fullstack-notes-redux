import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

export async function getNotes() {
  const response = await axios.get(baseUrl);

  return response.data;
}

export async function createNote(content) {
  const response = await axios.post(baseUrl, { content, important: false });

  return response.data;
}
