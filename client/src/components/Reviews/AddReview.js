import React, { Component } from 'react';

export default class AddReview extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            stars: '',
            review: '',
        }
    }

    handleOnTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleOnStarChange(event) {
        this.setState({
            stars: event.target.value
        })
    }
    handleOnReviewChange(event) {
        this.setState({
            review: event.target.value
        })
    }
    handleOnSubmit(event) {
        event.preventDefault();
        this.props.store.dispatch({
            type: 'ADD_REVIEW',
            review: this.state
        });
    }

    render () {
        return (
            <div className="addreview-form">
                <form onSubmit={(event) => this.handleOnSubmit(event)}>

                    <p>
                        <label>Title:</label>
                        <input
                            type="text"
                            onChange={event => this.handleOnTitleChange(event)}
                            value={this.state.title}
                            placeholder="Title here" />
                    </p>

                    <p>
                        <label>Stars:</label>
                        <input
                            type="text"
                            onChange={event => this.handleOnStarChange(event)}
                            value={this.state.star}
                            placeholder="Choose 1, 2, 3, 4 or 5 stars" />
                    </p>

                    <p>
                        <label>Review:</label>
                        <input 
                            type="text"
                            OnChange={event => this.handleOnReviewChange(event)}
                            value={this.state.review}
                            placeholder="Write Your Review Here" />
                    </p>

                    <input
                        type="submit"
                        value="Add Review" />
                </form>
            </div>                    
        )
    }
}