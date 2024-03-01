import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PersonalNavBar.css';

import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from "react-scroll";

import MoZhou from '../../img/personal-logo.png';

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
            <Nav className="justify-content-end" id="navLink">
              <Link to="selfIntro" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <Nav.Link className="navLinkContent" eventKey="home">Home</Nav.Link>
              </Link>
              <Link to="biography" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <Nav.Link className="navLinkContent" eventKey="biography">About Me</Nav.Link>
              </Link>
              <Link to="qualification" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <Nav.Link className="navLinkContent" eventKey="qualification">Qualifications</Nav.Link>
              </Link>
              <Link to="experience" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <Nav.Link className="navLinkContent" eventKey="experience">Experience</Nav.Link>
              </Link>
              <Link to="contactMe" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <Nav.Link className="navLinkContent" eventKey="contactMe">Contact Me</Nav.Link>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;