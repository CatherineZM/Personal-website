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
              <Link className="navLinkTab" to="selfIntro" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <span className="navLinkContent">Home</span>
              </Link>
              <Link className="navLinkTab" to="biography" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <span className="navLinkContent">About Me</span>
              </Link>
              <Link className="navLinkTab" to="qualification" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <span className="navLinkContent">Qualifications</span>
              </Link>
              <Link className="navLinkTab" to="experience" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <span className="navLinkContent">Experience</span>
              </Link>
              <Link className="navLinkTab" to="contactMe" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                <span className="navLinkContent">Contact Me</span>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;