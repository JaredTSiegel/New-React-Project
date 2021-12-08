import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/circle logo.png" height="30" width="30" alt="NuCamp Logo" />{' '}TruMusic</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/na">Pricing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/https://www.spotify.com">The Mock Site</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/na">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;