import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/PersonalNavBar.css';

import {Navbar, Nav, Container} from 'react-bootstrap';

import MoZhou from './../img/personal-logo.png';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colorChange: false,
    };
  }

  listenScrollEvent = () => {
    if(window.scrollY > 20) {
      this.setState({colorChange: true});
    } else {
      this.setState({ colorChange: false});
    }
  }

  componentDidMount() {
    if (this.props.isHomePage){
      window.addEventListener('scroll', this.listenScrollEvent);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }
  
  render() {
    return (
      <div id="navbar">
        <Navbar className={this.state.colorChange ? 'nav-white' : 'nav-transparent'}>
          <Container className="navContainer">
            <Navbar.Brand className="personal-logo" href="/">
              <img className="d-inline-block align-top" src={MoZhou} alt="Mo Zhou"/>
            </Navbar.Brand>
            <Nav className="justify-content-end" id="navLink" activeKey={this.props.page}>
                <Nav.Link className="navLinkContent" href="/" eventKey="home">Home</Nav.Link>
                <Nav.Link className="navLinkContent" href="/experience" eventKey="experience">Experience</Nav.Link>
                <Nav.Link className="navLinkContent" href="/contact" eventKey="contact">Contact Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;