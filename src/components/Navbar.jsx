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
          <Navbar.Brand href="#home">Feature-Flicks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/screenings" className="my-nav-link mr-3">Auditorium</Nav.Link>
              <Nav.Link as={Link} to="/movies" className="my-nav-link">Movies</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Horror</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Bar;