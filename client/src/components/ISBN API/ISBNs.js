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
            data: [],
            cities: []
        }
            this.cities = this.cities.bind(this)
            this.findMatches = this.findMatches.bind(this)
            this.numberWithCommas = this.numberWithCommas.bind(this)
            this.suggestions = this.suggestions.bind(this)
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


// getJSON() {
//     fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
//     .then(blob => blob.json())
//     .then(data => cities.push(...data))
// }
// makeEveryThingInScope() {

// findMatches(wordToMatch, cities) {
//     return cities.filter(place => {
//         const regex = new RegExp(wordToMatch, 'gi');
//         return place.city.match(regex) || place.state.match(regex)
//     });
//     }

// numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
// }

// displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//     const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `
//   }).join('');
//   suggestions.innerHTML = html;
// }
// }

    render() {
            console.log(this.state.data);
        return (
            <div className="isbn-api">
                <h1>ISBN API</h1>
                    {this.state.data.map((data) => {
                        return (
                            <div>
                                <li key={data.id}>{data.title}, {data.summary}</li>

                <form class="search-form">
                    <input type="text" class="search" placeholder="City or State" />
                    <ul class="suggestions">
                    <li>Filter for a book title</li>
                    </ul>
                </form>

                            </div>
          );
        })}
            </div>
        )
    }  
}
