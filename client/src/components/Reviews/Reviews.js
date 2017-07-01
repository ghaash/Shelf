import Review from './Review';
import AddReview from './AddReview';


import React, { Component } from 'react';

export default class Reviews extends Component {
    constructor() {
        super()
        
        this.state = {
            reviews: []
        }
        this.createReview = this.createReview.bind(this)
    }

    createReview(newReview) {
        return fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(response => response.json())
        .then(review => this.setState({
            reviews: this.state.reviews.concat(review)
        }))
        .catch(err => console.log("Error of: ", err))
    }

    componentDidMount() {
        return fetch ('/reviews', {
            method: 'GET',
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(reviews => this.setState({ reviews }))
        .catch(err => console.log("error is: ", err))
    }

    render() {
        console.log(this.state.reviews)
        return (
            <div className="Reviews">
            <AddReview createReview={this.createReview}/>
                {this.state.reviews.map((review) => {
                    return (
                        <Review id={review.id} title={review.title} stars={review.stars} review={review.review} />
                    )
                })}
            </div>
        )
    }
}