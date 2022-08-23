import { actionTypes } from '../../actionTypes'

const reposState = {
    isReposLoading: false,
    isError: false,
    error: { from: '', message: '' },
    repos: []
}

const reposReducer = (state = reposState, action) => {
    switch(action.type) {
        case actionTypes.GET_REPOS:
            return {
                ...state,
                isUserLoading : true
            }
        case actionTypes.REPOS_FOUND:
            return {
                ...state,
                isUserLoading: false,
                isError: false,
                error: { from: '', message: '' },
                repos: action.payload
            }
        case actionTypes.REPOS_NOT_FOUND:
            return {
                ...state,
                isUserLoading : false,
                isError: true,
                error: { from: 'reposReducer', message: action.payload },
            }
        default:
            return state;
    }
}

export default reposReducer