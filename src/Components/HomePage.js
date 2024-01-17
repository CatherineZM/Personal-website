import React from 'react';
import { Paper, Grid, Card, CardActions, CardContent, Typography, Button } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/HomePage.css';

import NavBar from './NavBar';
import Banner from './HomePage/Banner.component';

const InfoCard = ({ type, title, organization, description, link }) => {
  return (
    <Paper className="proj-cards">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>{type}</Typography>
          <Typography variant="h5">{title}</Typography>
          <Typography color="text.secondary">{organization}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={link}>Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <NavBar page="home" isHomePage={true}/>
        <Banner />
        <Grid container spacing={2} className="home-content">
          <Grid item xs={12} sm={6}>
            <InfoCard type="Education" 
                      title="Computer Engineering"
                      organization="University of Toronto"
                      description="Bachelor of Applied Science\n Minor in Engineering Business \n Certificate in Artificial Intelligence"
                      link="https://www.ece.utoronto.ca"
                      />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoCard type="Work Experience"
                      title="Software Developer"
                      organization="IBM Canada"
                      description="Description for section 2"
                      link="https://www.ibm.com/products/db2"
                      />
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <InfoCard type="Technical Experience"
                      title="Human Text" 
                      organization="University of Toronto"
                      description="Description for section 3"
                      link="/value"
                      />
          </Grid> */}
        </Grid>
      </div>
    )
  }
}

export default HomePage;
