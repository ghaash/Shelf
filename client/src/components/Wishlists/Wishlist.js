import React from 'react';

const Wishlist = ({ id, wishlist_title, wishlist_image_url, wishlist_description }) => (
  <div key={id} className='wishlist-div'>
	<h2>Title: {wishlist_title} </h2>
    <img src={wishlist_image_url} alt={wishlist_title} />
    <p>Description: {wishlist_description}</p>
    <button 
      onClick={this.moveToBooks} 
      className="move-to-books">
      Move to Books
      </button>
  </div>
)

export default Wishlist;