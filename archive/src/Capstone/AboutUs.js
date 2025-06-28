import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/AboutUs.css';

import { Container, Grid, Card, CardMedia, CardContent, Typography, 
         CardActions, Button } from '@mui/material';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import rose from './Components/photos/JonathanRose.jpg';
import inci from './Components/photos/inci.jpg';

const personalInfo = [
  {
    name: "Mo (Catherine) Zhou",
    subtitle:"Team Leader",
    description: "Electrical & Computer Engineering class of 2022 + PEY at the University of Toronto",
    emailAddr: "mailto: catherinemo.zhou@mail.utoronto.ca",
    linkedinAddr: "https://www.linkedin.com/in/catherine-zhou-1016/",
    img: require("./Components/photos/mozhou.png"),
  },
  {
    name: "Boyuan (Jesse) Shao",
    subtitle:"Team Member",
    description: "Electrical & Computer Engineering class of 2022 + PEY at the University of Toronto",
    emailAddr: "mailto: boyuan.shao@mail.utoronto.ca",
    linkedinAddr: "https://www.linkedin.com/in/boyuan-shao/",
    img: require("./Components/photos/jesse.JPG"),
  },
  {
    name: "Qiyan (Eric) Liu",
    subtitle:"Team Member",
    description: "Electrical & Computer Engineering class of 2022 + PEY at the University of Toronto",
    emailAddr: "mailto: qiyan.liu@mail.utoronto.ca",
    linkedinAddr: "https://www.linkedin.com/in/qiyan-liu-17a8641b9/",
    img: require("./Components/photos/eric.JPG"),
  },
  {
    name: "Yonghai (Scott) Yu",
    subtitle:"Team Member",
    description: "Electrical & Computer Engineering class of 2022 + PEY at the University of Toronto",
    emailAddr: "mailto: scott.yu@mail.utoronto.ca",
    linkedinAddr: "https://www.linkedin.com/in/yong-hai-yu/",
    img: require("./Components/photos/scott.JPG"),
  },

]

class AboutUs extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <Container maxWidth={false} disableGutters>
            <NavBar page="about"/>
            <Container maxWidth='lg' className="aboutContent">
              <h2>Who Are We?</h2>
              <body1>
                We are a team of 4 students from the University of Toronto, class of 2022 + PEY:
              </body1>
              <Grid container columnSpacing={2} rowSpacing={2}>
                {personalInfo.map((person, index) => (
                  <Grid item xs={6} sm={6} md={3} key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        alt={person.name}
                        image={person.img}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {person.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {person.subtitle}
                        </Typography>
                        <Typography variant="body2">
                          {person.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small"><a href={person.emailAddr}>Email</a></Button>
                        <Button size="small"><a href={person.linkedinAddr}>LinkedIn</a></Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <h2>Special Thanks To:</h2>
                </Grid>
                <Grid item xs={6} md={3} >
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Prof.Jonathan Rose"
                      image={rose}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Prof. Jonathan Rose
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Supervisor
                      </Typography>
                      <Typography variant="body2">
                        Professor in the Edward S. Rogers Sr. Department of Electrical and Computer Engineering at the University of Toronto.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small"><a href="mailto: jonathan.rose@ece.utoronto.ca">Email</a></Button>
                      <Button size="small"><a href="http://www.eecg.utoronto.ca/~jayar/">Website</a></Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={6} md={3} >
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Ms.Inci McGreal"
                      image={inci}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Ms. Inci McGreal
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Administrator
                      </Typography>
                      <Typography variant="body2">
                       Licensed Professional Engineer (P. Eng).
                       <br/>
                      Certified Project Management Professional (PMP) as well as Quality Auditor.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small"><a href="mailto: inci.mcgreal@utoronto.ca">Email</a></Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
              <Footer />
            </Container>
          </Container>
    )
  }
}

export default AboutUs;
