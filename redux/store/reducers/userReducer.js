import { actionTypes } from '../../actionTypes'

const userState = {
    isUserLoading: false,
    isError: false,
    error: { from: '', message: '' },
    user: {}
}

const userReducer = (state = userState, action) => {
    switch(action.type) {
        case actionTypes.GET_USER:
            return {
                ...state,
                isUserLoading : true
            }
        case actionTypes.USER_FOUND:
            return {
                ...state,
                isUserLoading: false,
                isError: false,
                error: { from: '', message: '' },
                user: action.payload
            }
        case actionTypes.USER_NOT_FOUND:
            return {
                ...state,
                isUserLoading : false,
                isError: true,
                error: { from: 'UserReducer', message: action.payload },
            }
        default:
            return state;
    }
}

export default userReducer