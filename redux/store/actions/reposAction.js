import { GET_REPOS, REPOS_FOUND, REPOS_NOT_FOUND } from '../actionTypes'

import axios from 'axios'

const url = "https://api.github.com";

export const repositoryGet = (user) => async dispatch => {
    try {
      dispatch({ type: GET_REPOS });
  
      const response = await axios.get(`${url}/users/${user.login}/repos`)
  
      dispatch({
        type: GET_REPOS,
        payload: response.data,
      });
  
    } catch (error) {
      dispatch({ type: REPOS_NOT_FOUND, payload: error.message });
      // router.push('/500')
    }
  };