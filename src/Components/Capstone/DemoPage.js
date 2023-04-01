import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Capstone/styles/DemoPage.css';

import { Container} from '@mui/material';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

class DemoPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <Container maxWidth={false} disableGutters>
            <NavBar page="demo"/>
            <Container maxWidth='lg' className="demoContent">

              <Footer/>
            </Container>
        </Container>
    )
  }
}

export default DemoPage;
