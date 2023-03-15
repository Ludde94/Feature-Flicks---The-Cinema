import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function naviBar() {
const [fade, setFade] = useState(true);
const handleMouseEnter = () => {setFade(false);}
const handleMouseLeave = () => {setFade(true);}
return (
<Navbar fixed="top"
    className={`Bar ${fade ? 'fade-out' : ''}`}
    expand="lg"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
>
    <Container>
    <Navbar.Brand href="#home">Feature Flicks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home">Auditorium</Nav.Link>
        <NavDropdown title="Genres" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
            Separated link
            </NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
);
}
    
export default naviBar;