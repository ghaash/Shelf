import './Navbar.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
            <Nav bsStyle="pills">
                    <NavItem><Link to="/welcome">Welcome</Link></NavItem>                
                    <NavDropdown title="Books">
                        <MenuItem><Link to="/books">Your Books</Link></MenuItem>
                        <MenuItem><Link to="/books/new">Add A Book</Link></MenuItem>
                    </NavDropdown>
                    <NavDropdown title="Wishlist">
                        <MenuItem><Link to="/wishlists">Your Wishlist</Link></MenuItem>
                        <MenuItem><Link to="/wishlists/new">Add to Wishlist</Link></MenuItem>
                    </NavDropdown>
                    <NavDropdown title="Reviews">
                        <MenuItem><Link to="/reviews">Your Reviews</Link></MenuItem>
                        <MenuItem><Link to="/reviews/new">Write a Review</Link></MenuItem>
                    </NavDropdown>
                    <NavDropdown title="About">
                        <MenuItem><Link to="/about">About Me</Link></MenuItem>
                        <MenuItem><Link to="/github">Github</Link></MenuItem>
                    </NavDropdown>
                </Nav>
            </div>
        )
    }
}