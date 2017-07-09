import React, { Component } from 'react';

export default class AddWishlist extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            wishlist_title: '',
            wishlist_description: '', 
            wishlist_image_url: '',
        }
    }

    handleOnWishlistTitleChange(event) {
        this.setState({
            wishlist_title: event.target.value
        })
    }

    handleOnWishlistDescriptionChange(event) {
        this.setState({
            wishlist_description: event.target.value
        })
    }

    handleOnWishlistImageUrlChange(event) {
        this.setState({
            wishlist_image_url: event.target.value
        })
    }

    handleOnWishlistSubmit(event) {
        event.preventDefault();
        this.props.createWishlist(this.state)
    }

    render() {
        return (
            <div className="addwishlist-form">
                <form onSubmit={(event) => this.handleOnWishlistSubmit(event)}>

                    <p>
                        <label>Wishlist Title:</label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnWishlistTitleChange(event)}
                            value={this.state.wishlist_title} 
                            placeholder="Wishlist Book Title" />
                    </p>
                    
                    <p>
                        <label>Wishlist Description:</label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnWishlistDescriptionChange(event)}
                            value={this.state.wishlist_description} 
                            placeholder="Wishlist Book Description" />
                    </p>

                    <p>
                        <label>Wishlist Image Url:</label>
                        <input 
                            type="text"
                            onChange={event => this.handleOnWishlistImageUrlChange(event)}
                            value={this.state.wishlist_image_url} 
                            placeholder="WishlistImage Url" />
                    </p>

                    <input 
                        type="submit"
                        value="Add Book To Wishlist" />
                </form>
                
            </div>
            
        )
    }

}