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

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route path="/welcome" component={Welcome}/>
              <Route path="/books" component={Books} />
              <Route path="/books/new" component={AddBook}/>
              <Route path="/wishlists" component={Wishlists}/>
              <Route path="/wishlists/new" component={AddWishlist}/>
              <Route path="/reviews" component={Reviews}/>
              <Route path="/reviews/new" component={AddReview}/>
              <Route path="/about" component={About}/>
              <Route path="/github" component={Github}/> 
            </Switch>             
        </div>
      </Router>  
    );
  }
}
 