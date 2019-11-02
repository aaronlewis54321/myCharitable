import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <MDBNavbar color="deep-orange darken-4" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">MyCharitable</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/login">Log In</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/signup">Sign Up</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

export default NavBar;