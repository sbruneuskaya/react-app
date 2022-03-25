import { fetchMostRatedRepositories } from "../services/services";
import {
    getRepositoriesRequest,
    getRepositoriesSuccess,
    getRepositoriesError,
} from "./action";

export function getRepositories() {
    return async (dispatch, getState) => {
        dispatch(getRepositoriesRequest())
        try {
            const repositories = await fetchMostRatedRepositories()

            dispatch(getRepositoriesSuccess(repositories))
        } catch (error) {
            console.error(error)
            dispatch(getRepositoriesError(error))
        }
    }
}
