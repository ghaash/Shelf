import React from 'react';

const Review = ({ id, title, stars, review}) => (
    <div key={id} className='review-div'>
    <h1>Title: {title}</h1>
    <h2>Stars: {stars} </h2>
    <p>Review: {review}</p>
    </div>
)

export default Review; 