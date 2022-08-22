import { GET_USER, USER_FOUND, USER_NOT_FOUND } from '../actionTypes'

import axios from 'axios'

const url = "https://api.github.com";

export const userGet = (username) => async dispatch => {
    try {
      dispatch({ type: GET_USER });
  
      const response = await axios.get(`${url}/users/${username}`)
  
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
  
    } catch (error) {
      dispatch({ type: USER_NOT_FOUND, payload: error.message });
      // router.push('/500')
    }
  };