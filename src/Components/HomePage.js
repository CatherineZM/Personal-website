import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import contentData from './data.json';

import NavBar from './Subsections/NavBar';
import Banner from './Subsections/Banner.component';
import Biography from './Subsections/Biography.component';
import Qualifications from './Subsections/Qualifications.component';
import Experience from './Subsections/Experience.component';

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
          <Biography />
          <Qualifications />
        </div>
        <div className="exp">
          <Experience />
        </div>
      </div>
    )
  }
}

export default HomePage;
