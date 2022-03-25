import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/header';
import Main from './pages/main';
import { createStore } from './redux/store';


function App() {
    return (
        <BrowserRouter>
            <Provider store={createStore()}>
                <Header />
                <Main />
            </Provider>
        </BrowserRouter>
    );
}

export default App;