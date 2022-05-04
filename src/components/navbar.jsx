import React from 'react';

//ui imports

import { Navbar, Container, Nav } from 'react-bootstrap';

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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/all">All books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
