import { GET_USER, USER_FOUND, USER_NOT_FOUND } from '../actionTypes'

const userState = {
    isUserLoading: false,
    isError: false,
    error: { from: '', message: '' },
    user: []
}

const userReducer = (state = userState, action) => {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                isUserLoading : true
            }
        case USER_FOUND:
            return {
                ...state,
                isUserLoading: false,
                isError: false,
                error: { from: '', message: '' },
                user: action.payload
            }
        case USER_NOT_FOUND:
            return {
                ...state,
                isUserLoading : false,
                isError: true,
                error: { from: 'GET USER', message: action.payload },
            }
        default:
            return state;
    }
}

export default userReducer