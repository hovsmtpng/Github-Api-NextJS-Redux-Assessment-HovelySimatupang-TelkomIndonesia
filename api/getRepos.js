import axios from 'axios';
const url = "https://api.github.com";

export const getRepos = async (username) => {
  try {
    const res = await axios.get(`${url}/users/${username}/repos`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
