import React from 'react';
import { Grid, Typography } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/HomePage.css';

import contentData from './data.json';

import NavBar from './NavBar';
import Banner from './HomePage/Banner.component';
import InfoCard from './HomePage/InfoCard';
import SkillChart from './HomePage/SkillChart';
import IDEChart from './HomePage/IDEChart';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      education: contentData.education,
      workExperience: contentData.workExperience,
      languages: contentData.languages.name,
      langData: contentData.languages.proficiency,
    };
  }

  render() {
    return (
      <div>
        <NavBar page="home" isHomePage={true}/>
        <Banner />
        <div className="firstSection">
          <Typography variant='h4' component="h2">
            Highlight of Qualifications
          </Typography>
          <Grid container className="skillChart">
            <Grid item xs={12} md={7}>
              <Typography variant='h5' component="h3">
                Programming Languages
              </Typography>
              <SkillChart title="Proficiency"
                list={this.state.languages} 
                listData={this.state.langData}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant='h5' component="h3">
                Softwares & IDEs
              </Typography>
              <IDEChart/>
            </Grid>
          </Grid>
      
          <Typography variant='h4' component="h2" className="sectionName">
            Education & Work Experience
          </Typography>
          <Grid container spacing={2} className="home-content">
            <Grid item xs={12} sm={6}>
              <InfoCard type="Education" 
                        title={this.state.education.title}
                        organization={this.state.education.organization}
                        date={this.state.education.date}
                        description={this.state.education.description}
                        link="https://www.ece.utoronto.ca"
                        />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoCard type="Work Experience"
                        title={this.state.workExperience.title}
                        organization={this.state.workExperience.organization}
                        date={this.state.workExperience.date}
                        description={this.state.workExperience.description}
                        link="https://www.ibm.com/products/db2"
                        />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default HomePage;
