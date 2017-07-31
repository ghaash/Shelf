import React, { Component } from 'react';
 
export default class Book extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = props
    // this.state.id = props.id
    // this.state.title = props.title
    // this.state.votes = props.votes
    // this.state.image_url = props.image_url
    // this.state.description = props.description

    this.handleUpvote = this.handleUpvote.bind(this)
  }

  // handleUpvote(){
  //   // // actually fire AJAX to update the server
  //   // PATCH /books/1?vote=up
  //   // PATCH
  //   // // debugger
  //   // // this.state.votes = this.state.votes + 1
  //   // // this.setState({votes: this.state.votes})
  //   // // // Correct
  //   this.setState((prevState, props) => ({
  //     votes: prevState.votes + 1
  //   }));
  // }

  handleUpvote() {
    return fetch('/books', {
      method: 'PATCH',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    // .then(books => this.setState((prevState, props) => ({votes: prevState.votes + 1}))
  }

  // componentDidMount() {
  //   return fetch('/books', {
  //     method: 'GET', 
  //     headers: {
  //       'Accepts': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(books => this.setState({ books }))
  //   .catch(err => console.log("error is: ", err))
  // }

  render() {
    return(
      <div key={this.state.id} className='book-div'>
        <p>Votes: {this.state.votes}</p>
        <h2>Title: {this.state.title} </h2>
        <img src={this.state.image_url} alt={this.state.title} />
        <p>Description: {this.state.description}</p>
        <p>Votes: {this.state.votes}</p>
        <button className="Downvote">Downvote</button>
        <button onClick={this.handleUpvote} className="Upvote">Upvote</button>
      </div>
    )
  }
}

// handleOnUpVote(event) {
//     console.log("Hello, I'm getting logged")
//     //on click this button increments by one
//      this.setState({
//       book: this.votes + 1
//     });
//   }

//   handleOnDownVote(event) {
//     console.log("Hello, I'm getting logged")
//     //on click this button increments by one
//      this.setState({
//       book: this.votes - 1
//     });
//   }

// this.handleOnUpVote = this.handleOnUpVote.bind(this)
// this.handleOnDownVote = this.handleOnDownVote.bind(this)

   