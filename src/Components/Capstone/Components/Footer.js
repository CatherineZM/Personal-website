import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';

import logo from "../Components/logo.png";

import {Grid, Container, Typography, Divider, Item} from '@mui/material';

class Footer extends React.Component {
  constructor(props){
    super();
  }
  
  render() {
    return (
        <Container className="footer" component="main" sx={{ mt: 8, mb: 2 }} maxWidth="none">
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={12}>
                    <Divider />
                </Grid>
                <Grid xs={5} md={5} lg={2} className='logo' item>
                    <img src={logo} alt="logo"/>
                </Grid>
                <Grid xs={7} md={7} lg={10} item>
                    <Typography variant='body2'><a href="/value"> Home </a></Typography>
                    <Typography variant='body2'><a href="/value/project"> About Project </a></Typography>
                    <Typography variant='body2'><a href="/value/demo"> Demo </a></Typography>
                    <Typography variant='body2'><a href="/value/about"> About Us </a></Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body1' className="disclaimer">
                    Disclaimer: Value Detector is intended for the human value classification problem only. 
                    Value Detector would not be used to collect any personal information. 
                    In no way should the information provided by Value Detector be considered advice or recommendations.
                    Value Detector and its developers shall not be held against any unlawful, offensive, threatening, libellous, 
                    defamatory, obscene or otherwise objectionable content the user may enter.
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body1' className="copyright">
                        &copy; Copyright 2023, Capstone Team 2022518 at the University of Toronto. 
                        <br/>
                        All Rights Reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
  }
}

export default Footer;