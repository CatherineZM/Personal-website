import React from 'react';

import { Container, Button, Grid} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Banner.css';

import background from '../../img/background.jpeg';

class Banner extends React.Component {
  
  render() {
    const bannerStyle = {
      backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'columnn',
      
    };

    return (
      <div className="banner selfIntro" style = {bannerStyle}>
        <Container>
          <div className="bannerInfo">
            <h2>Hello There! </h2>
            <h1>I'm Catherine</h1>
            <h3>A <strong>full stack developer</strong> and a recent graduate in <strong>Computer Engineering</strong>.</h3>
          </div>
          <Grid container className="bannerBtns" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
              <Button className="socialBtn" href="mailto:catherine.zm@outlook.com">
                <MailOutlineIcon/>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className="socialBtn" href="https://github.com/CatherineZM">
                <GitHubIcon/>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className="socialBtn" href="https://www.linkedin.com/in/catherine-zhou-1016/">
                <LinkedInIcon/>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button className="socialBtn" href="https://instagram.com/catherine.zm?igshid=YWJhMjlhZTc=">
                <InstagramIcon/>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Banner;




