import React from 'react';
import { Grid, List, Typography, ListItem } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import contentData from './data.json';
import portrait from '../img/photo.jpg';

import NavBar from './Subsections/NavBar';
import Banner from './Subsections/Banner.component';
import InfoCard from './Elements/InfoCard';
import SkillChart from './Elements/SkillChart';
import IDEChart from './Elements/IDEChart';
import { Button } from 'react-bootstrap';

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
        <Banner/>
        <div className="aboutMe">
          <Grid container spacing={2} className="biography" id="biography">
            <Grid item xs={0} md={1} />
            <Grid item xs={12} md={3}>
              <img className="profilePic" src={portrait} alt="Catherine Zhou Pic" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h4' component="h2">
                About Me
              </Typography>
              <Typography className="quote">
                I recently completed my Bachelor's degree from the University of Toronto in Electrical and Computer Engineering 
                with a minor in Engineering Business and a certification in Artificial Intelligence. 
                And I had a 16-months experience as a Software Developer at IBM Canada. 
                I have a strong passion for programming and software development, especially in web applications. 
                I have acquired multiple skills in various data structures, testing methodologies, and algorithms, 
                as well as in various programming languages such as Python, JavaScript, C/C++, Perl, Java, SQL, HTML, and more.
              </Typography>
              <List>
                <ListItem>Email: </ListItem>
                <ListItem>Location: Toronto</ListItem>  
                <ListItem>Name: </ListItem>
              </List>
              <Button>Hi</Button>
            </Grid>
          </Grid>
          <Typography className="sectionTitle qualification" variant='h4' component="h2">
            Highlight of Qualifications
          </Typography>
          <Grid container className="skillChart qualification">
            <Grid item xs={12} md={7}>
              <Typography variant='h5' component="h3" className="skillSubtitle">
                Programming Languages
              </Typography>
              <SkillChart title="Proficiency"
                list={this.state.languages} 
                listData={this.state.langData}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant='h5' component="h3" className="skillSubtitle">
                Softwares & IDEs
              </Typography>
              <IDEChart/>
            </Grid>
          </Grid>
      
          <Typography variant='h4' component="h2" className="sectionTitle experience">
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
