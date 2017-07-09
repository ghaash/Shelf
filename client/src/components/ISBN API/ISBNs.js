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
        return fetch('http://isbndb.com/api/v2/json/3V7TNNZE/book/', {
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