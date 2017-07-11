//uses Goodreads API to find book titles...
//however goodreads API is xml
//rails is JSON
//goodreads does not have a json api and won't be making one..
//what to do?

import React, { Component } from 'react';

export default class ISBN extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        return fetch('http://isbndb.com/api/v2/json/3V7TNNZE/book/name_of_the_wind', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/text'
                 
            },
        })
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .catch(err => console.log("error is: ", err))
    }

    render() {
            console.log(this.state.data);
        return (
            <div className="isbn-api">
                <h1>ISBN API</h1>
                    {this.state.data.map((data) => {
                        return (
                            <div>
                                <li key={data.id}>{data.title}, {data.summary}</li>
                            </div>
          );
        })}
            </div>
        )
    }  
}
