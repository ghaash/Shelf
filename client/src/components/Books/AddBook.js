import React, { Component } from 'react';

export default class AddBook extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            title: '',
            description: '', 
            image_url: '',
        }
    }

    handleOnTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleOnDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    handleOnImageUrlChange(event) {
        this.setState({
            image_url: event.target.value
        })
    }

    handleOnWishlistSubmit(event) {
        event.preventDefault();
        this.props.createWishlist(this.state)
    }

    render() {
        return (
            <div className="addbook-form">
                <form onSubmit={(event) => this.props.handleOnSubmit(event)}>

                    <p>
                        <label>Title:</label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnTitleChange(event)}
                            value={this.state.title} 
                            placeholder="Book Title" />
                    </p>
                    
                    <p>
                        <label>Description:</label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnDescriptionChange(event)}
                            value={this.state.description} 
                            placeholder="Book Description" />
                    </p>

                    <p>
                        <label>Image Url:</label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnImageUrlChange(event)}
                            value={this.state.image_url} 
                            placeholder="Image Url" />
                    </p>

                    <input 
                        type="submit"
                        value="Add Book" />
                </form>
                
            </div>
        )
    }

}