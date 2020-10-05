import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';


const MainNav = () => (
    <Nav className="mr-auto">
        <Nav.Link
            as={RouterNavLink}
            to="/"
            exact  
        >
        Home
        </Nav.Link>
        <Nav.Link
            as={RouterNavLink}
            to="/profile"
            exact
        >
        Profile
        </Nav.Link>
    </Nav>
)

const NavBar = () => {
    return (
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
          <MainNav />
        </Container>
      </Navbar>
    );
  };

export default NavBar;