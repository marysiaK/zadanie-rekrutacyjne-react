import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import NavLink from './NavLink'
import './Header.css'

class Header extends Component {
    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar className="shadow w-100" light expand="md" style={{ backgroundColor: "rgba(230, 230, 230)" }}>
                <div style={{ fontSize: 30 }}>
                    <NavLink className="ml-3 mr-3 text-dark text-decoration-none" to="/">Home</NavLink>
                </div>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="mt-2 mb-2 text-center">
                            <NavLink className="nav-link ml-3" to="/page1">page 1</NavLink>
                        </NavItem>
                        <NavItem className="mt-2 mb-2 text-center">
                            <NavLink className="nav-link ml-3" to="/page2">page 2</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header