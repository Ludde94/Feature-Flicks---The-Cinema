import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";

function Bar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar className="my-navbar" expand="lg" expanded={expanded}>
        <Container>
          <Nav.Link as={Link} to="/" className="my-nav-link mr-3" style={{fontSize: '32px', fontWeight: 'bold'}}>FeatureFlicks</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/screenings" className="my-nav-link" style={{fontSize: '20px', marginRight: '60px'}}>Auditorium</Nav.Link>
              <Nav.Link as={Link} to="/movies" className="my-nav-link" style={{fontSize: '20px', marginLeft: '60px'}}>Movies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Bar;