import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function Header() {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">Chat App</NavbarBrand>
            <NavbarToggler onClick={toggleOpen} />
            <Collapse isOpen={open} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">Location</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/chat">Public Chat</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/roomChat">Room Chat</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}