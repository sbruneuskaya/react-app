import {
    GET_REPOSITORIES_REQUEST,
    GET_REPOSITORIES_SUCCESS,
    GET_REPOSITORIES_ERROR
} from "./constActions";

const initialState = {
    isLoading: false,
    items: [],
    error: null,
    total: 0,
}

export function repositoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REPOSITORIES_REQUEST:
            {
                return {
                    ...state,
                    isLoading: true,
                }
            }
        case GET_REPOSITORIES_SUCCESS: {
            const topRepos = action.payload.items;
            const totalRepos = action.payload.total;
            return {
                ...state,
                isLoading: false,
                items: topRepos,
                total: totalRepos,
            }
        }
        case GET_REPOSITORIES_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        }
        default: {
            return state
        }
    }
}