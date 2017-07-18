import React from 'react';
 
 const Book = ({ id, title, image_url, description, votes }) => (
   
   <div key={id} className='book-div'>
     <p>Votes: {votes}</p>
     <h2>Title: {title} </h2>
     <img src={image_url} alt={title} />
     <p>Description: {description}</p>
     <p>Votes: {votes}</p>
   </div>
 ) 
 
 export default Book;