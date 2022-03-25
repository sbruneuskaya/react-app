import {
    GET_REPOSITORIES_REQUEST,
    GET_REPOSITORIES_SUCCESS,
    GET_REPOSITORIES_ERROR
} from "./constActions";

export function getRepositoriesRequest() {
    return {
        type: GET_REPOSITORIES_REQUEST,
    }
}

export function getRepositoriesSuccess(repositories) {
    return {
        type: GET_REPOSITORIES_SUCCESS,
        payload: repositories,
    }
}

export function getRepositoriesError(error) {
    return {
        type: GET_REPOSITORIES_ERROR,
        payload: error,
    }
}

