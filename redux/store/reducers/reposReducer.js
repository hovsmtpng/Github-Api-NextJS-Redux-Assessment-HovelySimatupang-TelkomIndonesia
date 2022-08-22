import { GET_REPOS, REPOS_FOUND, REPOS_NOT_FOUND } from '../actionTypes'

const reposState = {
    isReposLoading: false,
    isError: false,
    error: { from: '', message: '' },
    repos: []
}

const reposReducer = (state = reposState, action) => {
    switch(action.type) {
        case GET_REPOS:
            return {
                ...state,
                isUserLoading : true
            }
        case REPOS_FOUND:
            return {
                ...state,
                isUserLoading: false,
                isError: false,
                error: { from: '', message: '' },
                user: action.payload
            }
        case REPOS_NOT_FOUND:
            return {
                ...state,
                isUserLoading : false,
                isError: true,
                error: { from: 'GET REPOSITORY', message: action.payload },
            }
        default:
            return state;
    }
}

export default reposReducer