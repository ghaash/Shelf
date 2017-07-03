import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/index'

import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Route path="/" component={App}/>
    </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
