import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

import {Navbar, Nav, Container} from 'react-bootstrap';

class NavigationBar extends React.Component {
  
  render() {
    return (
      <div id="navbar">
        <Navbar bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Mo Zhou</Navbar.Brand>
                <Nav className="justify-content-end">
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

export default NavigationBar;