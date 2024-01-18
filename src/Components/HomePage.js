import React from 'react';
import { Paper, Grid, Card, CardActions, CardContent, Typography, Button } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/HomePage.css';

import NavBar from './NavBar';
import Banner from './HomePage/Banner.component';
import InfoCard from './HomePage/InfoCard';


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
                      description="Bachelor of Applied Science \nMinor in Engineering Business \nCertificate in Artificial Intelligence \n something new \n smothing new \n smoething new"
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
