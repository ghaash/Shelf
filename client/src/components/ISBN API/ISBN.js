import React from 'react';

const ISBN = ({ id, title, summary}) => (
    <div key={ISBN.id} className='review-div'>
    <h2>Title: {ISBN.title} </h2>
    <p>Summary: {ISBN.summary}</p>
    </div>
)

export default ISBNgi;