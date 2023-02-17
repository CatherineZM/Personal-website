import React from 'react';

import { Image } from 'react-bootstrap';
import { Container, Button, Grid} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Banner.css';

import background from '../../img/background.jpg';

class Banner extends React.Component {
  
  render() {
    return (
      <div>
        <Container className="banner" maxWidth={false} disableGutters>
            <Image id="bannerImage" src={background} />
            <div className="bannerText">
              <h1>
                Mo (Catherine) Zhou
              </h1>
              <h2>
                Electrical and Computer Engineering Student at the University of Toronto
              </h2>
              <Grid container>
                <Grid item xs />
                <Grid item xs={6}>
                  <Button className="contactBtn" href="/contact">
                      Contact Me
                  </Button>
                </Grid>
                <Grid item xs />
              </Grid>
              <Grid container>
                <Grid item xs />
                <Grid item xs={2}>
                  <Button className="socialBtn" href="mailto:catherinemo.zhou@mail.utoronto.ca">
                    <MailOutlineIcon/>
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button className="socialBtn" href="https://www.linkedin.com/in/catherine-zhou-1016/">
                    <LinkedInIcon/>
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button className="socialBtn" href="https://instagram.com/catherine.zm?igshid=YWJhMjlhZTc=">
                    <InstagramIcon/>
                  </Button>
                </Grid>
                <Grid item xs />
              </Grid>
            </div>
        </Container>
      </div>
    )
  }
}

export default Banner;



