import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MainMenu() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary px-5">
        <Navbar.Brand href="/">Movies DB</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="danger" href="/login">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default MainMenu