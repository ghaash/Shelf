// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
 
// const store = createStore(manageBook, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// ReactDOM.render(
//     <Provider store={store}>
//     <Router>
//         <Route path="/" component={App}/>
//     </Router>
//     </Provider>, document.getElementById('root'));
// registerServiceWorker();

// store.dispatch({ type: '@@INIT' });

//  ReactDOM.render(<App />, document.getElementById('root'));
//   registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Miscellaneous/Welcome';
import Books from './components/Books/Books';
import AddBook from './components/Books/AddBook';
import Wishlists from './components/Wishlists/Wishlists';
import AddWishlist from './components//Wishlists/AddWishlist';
import Reviews from './components/Reviews/Reviews';
import AddReview from './components/Reviews/AddReview';
import About from './components/Miscellaneous/About';
import Github from './components/Miscellaneous/Github';
import BookForm from './components/Books/BookForm';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/welcome" component={Welcome}/>
              <Route path="/books" component={Books} />
              <Route path="/addbook" component={AddBook}/>
              <Route path="/wishlists" component={Wishlists}/>
              <Route path="/addwishlist" component={AddWishlist}/>
              <Route path="/reviews" component={Reviews}/>
              <Route path="/addreview" component={AddReview}/>
              <Route path="/about" component={About}/>
              <Route path="/github" component={Github}/> 
              <Route path="/BookForm" component={BookForm}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".root")
);