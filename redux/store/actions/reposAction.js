import { actionTypes } from '../../actionTypes'

import axios from 'axios'

const url = "https://api.github.com";

export const repositoryGet = (user) => async dispatch => {
    try {
      dispatch({ type: actionTypes.GET_REPOS });
  
      const response = await axios.get(`${url}/users/${user.login}/repos`)
  
      dispatch({
        type: actionTypes.GET_REPOS,
        payload: response.data,
      });
  
    } catch (error) {
      dispatch({ type: actionTypes.REPOS_NOT_FOUND, payload: error.message });
      // router.push('/500')
    }
  };