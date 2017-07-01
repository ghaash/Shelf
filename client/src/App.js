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

import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/welcome" component={Welcome}/>
          <Route path="/books" component={Books}/>
          <Route path="/addbook" component={AddBook}/>
          <Route path="/wishlists" component={Wishlists}/>
          <Route path="/addwishlist" component={AddWishlist}/>
          <Route path="/reviews" component={Reviews}/>
          <Route path="/addreview" component={AddReview}/>
          <Route path="/about" component={About}/>
          <Route path="/github" component={Github}/> 
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => { 
  return { books: state.books };
};

const mapDispatchToProps = () => {
  return {
    AddBook: AddBook
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);

// createBook={() = this.creatBook()}
//createBook={this.createBook}