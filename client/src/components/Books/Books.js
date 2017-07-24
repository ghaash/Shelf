import Book from './Book';

import React, { Component } from 'react';


export default class Books extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      books: [],
    }

    this.createBook = this.createBook.bind(this)
  }

  createBook(newBook) {
    return fetch('/books', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook) 
        })
        .then(response => response.json())
        .then(book => this.setState({
          books: this.state.books.concat(book)
        }))
        .catch(err => console.log("Error of: ", err))
  }

  componentDidMount() {
    return fetch('/books', {
      method: 'GET', 
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(books => this.setState({ books }))
    .catch(err => console.log("error is: ", err))
  }

  render() {
    return (
      <div className="Books">
        {this.state.books.map((book) => {
          return (
          <div>
            <Book id={book.id} 
                  title={book.title} 
                  image_url={book.image_url} 
                  description={book.description}
                  votes={book.votes} 
                  />

          </div>
          )
        })} 
      </div>
    ); 
  }
}