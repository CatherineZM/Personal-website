import React from 'react';

// style sheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/projectNav.css';

// component from libraries
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button } from '@mui/material';

// component from local files
import MoZhou from '../../img/personal-logo.png';

class ProjectNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
        };
    }

    render() {
        return (
            <Navbar>
                <Container className="projNavContainer">
                    <Nav className="justify-content-start">
                        <Button className="projNavButton" href="/"> ← Back to Home</Button>
                    </Nav>
                    <Navbar.Brand className="personal-logo" href="/">
                        <img className="d-inline-block align-top" src={MoZhou} alt="Mo Zhou"/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            
        )
    }
}

export default ProjectNav;