import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

import {Navbar, Nav, Container} from 'react-bootstrap';

class NavBar extends React.Component {
  
  render() {
    return (
      <div id="navbar">
        <Navbar bg="light" variant="light" sticky="top">
          <Container className="navContainer">
            <Navbar.Brand className="logo" href="/">Mo Zhou</Navbar.Brand>
            <Nav className="justify-content-end navCompo">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;