//write function here to move wishlists to books
//psuedo-code
//render button that moves wishlist to book so use render/return
//when clicked button moves wishlist to book via post request and hides or deletes via id? 

import React, { Component } from 'react';

export default class MoveToBooks extends Component {

    constructor() {
    super() 

    this.state = {
      books: []
    }

        this.handleMoveToBooks = this.handleMoveToBooks.bind(this)

}

    handleMoveToBooks(event) {
        console.log("Hello, I'm getting logged")
        return fetch('/books/:id', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event) 
            })
            .then(response => response.json())
            .then(book => console.warn(book))
            .catch(err => console.log("Error of: ", err));
    }    

    render () {
    return (
        <div className="MoveToBooks">
        <button 
      onClick={this.handleMoveToBooks} 
      className="move-to-books">
      Move to Books
      </button>
        </div>
    )
  }
}