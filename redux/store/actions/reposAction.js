import { actionTypes } from '../../actionTypes'

import axios from 'axios'

const url = "https://api.github.com";

export const repositoryGet = (username) => async dispatch => {
    try {
      dispatch({ type: actionTypes.REPOS_FOUND });
  
      const response = await axios.get(`${url}/users/${username}/repos`)
  
      dispatch({
        type: actionTypes.REPOS_FOUND,
        payload: response.data,
      });
  
    } catch (error) {
      dispatch({ type: actionTypes.REPOS_NOT_FOUND, payload: error.message });
      // router.push('/500')
    }
  };