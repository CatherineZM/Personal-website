import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Capstone/styles/DemoPage.css';

import { Container } from '@mui/material';
import { Tab, Tabs } from 'react-bootstrap';
import Iframe from 'react-iframe'

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

class DemoPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      key: 'chatbot',
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({key: key});
  }

  render() {
    return (
        <Container maxWidth={false} disableGutters>
            <NavBar page="demo"/>
            <Container maxWidth='lg' className="demoContent">
              <Tabs activeKey={this.state.key} onSelect={this.handleSelect} fill>
                <Tab eventKey="chatbot" title="Value Detector - Chatbot (beta)">
                <Iframe src="https://loldota2iii-valuedetectiondemo.hf.space"
                          frameborder="0"></Iframe>
                </Tab>
                <Tab eventKey="qa" title="Value Detector Slim">
                  <Iframe src="https://loldota2iii-valuedetection.hf.space"
                          frameborder="0"></Iframe>
                </Tab>
              </Tabs>
              <Footer/>
            </Container>
        </Container>
    )
  }
}

export default DemoPage;
