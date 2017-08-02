import React, { Component } from 'react';
 
export default class Book extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = props
  }

  handleUpvote = () => {
    const dataObj = {votes: this.state.votes + 1}
    console.log(this)
    return fetch(`/books/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataObj)
    })
    .then(response => response.json())
    .then(book => this.setState({votes: book.votes}))
  } 

  handleDownvote = () => {
    const dataObj = {votes: this.state.votes - 1}
    console.log(this)
    return fetch(`/books/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataObj)
    })
    .then(response => response.json())
    .then(book => this.setState({votes: book.votes}))
  } 


  render() {
    return(
      <div key={this.state.id} className='book-div'>
        <p>Votes: {this.state.votes}</p>
        <h2>Title: {this.state.title} </h2>
        <img src={this.state.image_url} alt={this.state.title} />
        <p>Description: {this.state.description}</p>
        <p>Votes: {this.state.votes}</p>
        <button onClick={this.handleDownvote} className="Downvote">Downvote</button>
        <button onClick={this.handleUpvote} className="Upvote">Upvote</button>
      </div>
    )
  }
}

   