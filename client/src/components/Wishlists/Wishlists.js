import Wishlist from './Wishlist';
import AddWishlist from './AddWishlist';


import React, { Component } from 'react';

export default class Wishlists extends Component {

  constructor() {
    super() 

    this.state = {
      wishlists: []
    }

    this.createWishlist = this.createWishlist.bind(this)
    
  }
 
  createWishlist(newWishlist) {
    return fetch('/wishlists', {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWishlist) 
        })
        .then(response => response.json())
        .then(wishlist => this.setState({
          wishlists: this.state.wishlists.concat(wishlist)
        }))
        .catch(err => console.log("Error of: ", err))
  }

  componentDidMount() {
    return fetch('/wishlists', {
      method: 'GET', 
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(wishlists => this.setState({ wishlists }))
    .catch(err => console.log("error is: ", err))
  }

  render() {
    console.log(this.state.wishlists);
    return (
      <div className="Wishlists">
      <AddWishlist createWishlist={this.createWishlist}/>
        {this.state.wishlists.map((wishlist) => {
          return (
            <Wishlist id={wishlist.id} wishlist_title={wishlist.wishlist_title} wishlist_image_url={wishlist.wishlist_image_url} wishlist_description={wishlist.wishlist_description} />
          );
        })}
      </div>
    );
  }
}