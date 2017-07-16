import React from 'react';

const Book = ({ id, title, image_url, description, votes }) => (
  <div key={id} className='book-div'>
	<h2>Title: {title} </h2>
    <img src={image_url} alt={title} />
    <p>Description: {description}</p>
    <h1>{this.counter}</h1>
            <button 
                onClick={this.handleOnDownVote} 
                className="Downvote">
                Downvote
             </button>
             <button 
                onClick={this.handleOnUpVote} 
                className="Upvote">
                Upvote
             </button>
  </div>
) 

export default Book;