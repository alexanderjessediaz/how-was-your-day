import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const MainNav = () => (
  <Nav className="mr-auto">
    
  </Nav>
);



const NavBar = () => {
    return (
      <Navbar bg="light" expand="md">
        <Container>
          <MainNav />
      </Container>
      </Navbar>
    );
  };

export default NavBar