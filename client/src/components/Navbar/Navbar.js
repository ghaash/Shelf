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
                {/*<NavDropdown title="Books">*/}
                    <NavItem><Link to="/books">Your Books</Link></NavItem>
                    <NavItem><Link to="/addbook/new">Add A Book</Link></NavItem>
                {/*</NavDropdown>
                <NavDropdown title="Wishlist">*/}
                    <NavItem><Link to="/wishlists">Your Wishlist</Link></NavItem>
                    <NavItem><Link to="/addwishlist/new">Add to Wishlist</Link></NavItem>
                {/*</NavDropdown>
                <NavDropdown title="Reviews">*/}
                    <NavItem><Link to="/reviews">Your Reviews</Link></NavItem>
                    <NavItem><Link to="/addreview/new">Write a Review</Link></NavItem>
                {/*</NavDropdown>
                <NavDropdown title="About">*/}
                    <NavItem><Link to="/about">About Me</Link></NavItem>
                    <NavItem><Link to="/github">Github</Link></NavItem>
                    <NavItem><Link to="/BookForm">BookForm Test</Link></NavItem>
                {/*</NavDropdown>*/}
            </Nav>
            </div>
        )
    }
}