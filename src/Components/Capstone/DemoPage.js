import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container} from '@mui/material';

import NavBar from './Components/NavBar';

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
        </Container>
    )
  }
}

export default DemoPage;
