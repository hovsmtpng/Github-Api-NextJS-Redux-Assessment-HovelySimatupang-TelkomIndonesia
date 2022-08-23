import axios from 'axios';
const url = "https://api.github.com";

export const getUser = async (username) => {
  try {
    const res = await axios.get(`${url}/users/${username}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
