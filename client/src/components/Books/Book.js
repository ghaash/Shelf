import React, { Component } from 'react';

export default class Book extends Component {
  
  constructor() {
    super() 

    this.state = {
      books: [],
      counter: 0
    } 
      this.createBook = this.createBook.bind(this)
      this.handleOnUpVote = this.handleOnUpVote.bind(this)
      this.handleOnDownVote = this.handleOnDownVote.bind(this)
    
  }

 handleOnUpVote(event) {
    console.log("I'm getting clicked")
    this.setState({
      counter: this.state.books.counter + 1,
    });
  }

  handleOnDownVote(event) {
    console.log("I'm getting clicked")
    this.setState({
      counter: this.state.counter - 1,
    });
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

// render () {
//   return(
//      <div key={id} className='book-div'>
// 	<h2>Title: {title} </h2>
//     <img src={image_url} alt={title} />
//     <p>Description: {description}</p>
//     <h1>{this.state.counter}</h1>
//             <button 
//                 onClick={this.handleOnDownVote} 
//                 className="Downvote">
//                 Downvote
//              </button>
//              <button 
//                 onClick={this.handleOnUpVote} 
//                 className="Upvote">
//                 Upvote
//              </button>
//   </div>
//   )
// }


  render() {
    console.log(this.state.books);
    return (
      <div className="App">
        {this.state.books.map((book) => {
          return (
            <div 
              key={book.id}
              className="book-div">
              <h1>Title: {book.title}</h1>
              <img 
                src={book.image_url}
                alt={book.title} />
              <p>Description: {book.description}</p>
              <h1>{this.state.counter}</h1>
            <button 
                onClick={this.state.books.handleOnDownVote} 
                className="Downvote">
                Downvote
             </button>
             <button 
                onClick={this.state.books.handleOnUpVote} 
                className="Upvote">
                Upvote
             </button>
            </div>
          )
        })}
      </div>
    );
  }

}

// const Book = ({ id, title, image_url, description, votes }) => (
//   <div key={id} className='book-div'>
// 	<h2>Title: {title} </h2>
//     <img src={image_url} alt={title} />
//     <p>Description: {description}</p>
//     <h1>{this.state.counter}</h1>
//             <button 
//                 onClick={this.handleOnDownVote} 
//                 className="Downvote">
//                 Downvote
//              </button>
//              <button 
//                 onClick={this.handleOnUpVote} 
//                 className="Upvote">
//                 Upvote
//              </button>
//   </div>
// ) 
// 
// export default Book;