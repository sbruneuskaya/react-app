
import { createSelector } from "reselect";

export const selectRepositories = createSelector(state => state.topRepositoriesTop.items, topRepos => topRepos)
export const selectRepositoriesLoading = createSelector(state => state?.topRepositoriesTop?.isLoading, loading => loading)