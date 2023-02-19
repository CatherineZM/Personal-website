import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

import {Navbar, Nav, Container} from 'react-bootstrap';

class NavBar extends React.Component {
  
  render() {
    return (
      <div id="navbar">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container className="navContainer">
            <Navbar.Brand className="logo" href="/value">Value Detection</Navbar.Brand>
            <Nav className="justify-content-end navCompo">
                <Nav.Link href="/value">Home</Nav.Link>
                <Nav.Link href="/value/list">List of Value</Nav.Link>
                <Nav.Link href="/value/demo">Demo</Nav.Link>
                <Nav.Link href="/value/about">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;