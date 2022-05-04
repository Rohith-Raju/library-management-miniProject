import React from 'react';

//ui imports
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Your Library</Navbar.Brand>
          <Nav
            className="me-auto-right"
            style={{
              gap: '5vw',
            }}
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/all">All books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
