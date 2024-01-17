import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

import logo from "./logo-transparent.png";

import {Navbar, Nav, Container} from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props){
    super();
    this.props = props;
  }
  
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container className="navContent">
          <Navbar.Brand href="/value">
            <img src={logo} alt="logo" className="logo"/>
          </Navbar.Brand>
          <Nav className="justify-content-end navCompo" activeKey={this.props.page}>
              <Nav.Link href="/value" eventKey="home">Home</Nav.Link>
              <Nav.Link href="/value/project" eventKey="project">About Project</Nav.Link>
              <Nav.Link href="/value/demo" eventKey="demo">Demo</Nav.Link>
              <Nav.Link href="/value/about" eventKey="about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar;