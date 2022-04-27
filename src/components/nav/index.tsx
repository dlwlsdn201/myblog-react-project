import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Binary Woo의 개발 블로그</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">Profile</Nav.Link>
            <NavDropdown title="Study" id="basic-nav-dropdown">
              <NavDropdown.Item href="/FrontEnd">Front-end</NavDropdown.Item>
              <NavDropdown.Item href="/BackEnd">Back-end</NavDropdown.Item>
              <NavDropdown.Item href="/Database">Database</NavDropdown.Item>
              <NavDropdown.Item href="/Network">Network</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Etc">etc</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Project1">#1. Project</NavDropdown.Item>
              <NavDropdown.Item href="/Project2">#2. Project</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Album">Album</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
