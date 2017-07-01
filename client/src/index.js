import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import manageBook from './reducers/manageBook';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
 
const store = createStore(manageBook, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
    <App store={store}/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch({ type: '@@INIT' });

//  ReactDOM.render(<App />, document.getElementById('root'));
//   registerServiceWorker();