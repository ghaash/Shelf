//uses Goodreads API to find book titles...
//however goodreads API is xml
//rails is JSON
//goodreads does not have a json api and won't be making one..
//what to do?

import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class ISBN extends Component {
    constructor() {
        super()

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        return fetch('http://isbndb.com/api/v2/json/3V7TNNZE/book/name_of_the_wind', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
                 
            },
        })
        .then(response => response.json())
        .then(apis => this.setState({ apis }))
        .catch(err => console.log("error is: ", err))
    }

    render() {
        return (
            <div className="isbn-api">
                <h1>ISBN API</h1>
                    {this.state.books.map((api) => {
                        return (
                            <div>
                                <li key={api.id}>{api.title}, {api.summary}</li>
                            </div>
          );
        })}
            </div>
        )
    }  
}
