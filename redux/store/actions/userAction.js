import { actionTypes } from '../../actionTypes'

export const userGet = (user) => async dispatch => {
    try {
      dispatch({ type: actionTypes.USER_FOUND });
  
      dispatch({
        type: actionTypes.USER_FOUND,
        payload: user,
      });
  
    } catch (error) {
      dispatch({ type: actionTypes.USER_NOT_FOUND, payload: error.message });
      // router.push('/500')
    }
  };