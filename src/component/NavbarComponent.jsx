import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <div className="container-navbar">
      <Navbar className="shadow-sm">
        <Container>
          <Navbar.Brand>PELMA ADMIN</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
