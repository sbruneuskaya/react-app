import { applyMiddleware, combineReducers, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { repositoriesReducer } from './index';


function storeReducer() {
    return combineReducers({
        topRepositoriesTop: repositoriesReducer,
    })
}

const composeEnhancers = composeWithDevTools({
    name: 'Github'
})

export function createStore() {
    return createReduxStore(storeReducer(), composeEnhancers(applyMiddleware(thunk)))
}