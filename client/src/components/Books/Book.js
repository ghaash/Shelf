import React from 'react';
 
 const Book = ({ id, title, image_url, description }) => (
   <div key={id} className='book-div'>
 	<h2>Title: {title} </h2>
     <img src={image_url} alt={title} />
     <p>Description: {description}</p>
   </div>
 ) 
 
 export default Book;