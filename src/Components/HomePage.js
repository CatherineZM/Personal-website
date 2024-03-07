import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

import NavBar from './Subsections/NavBar';
import Banner from './Subsections/Banner.component';
import Biography from './Subsections/Biography.component';
import Qualifications from './Subsections/Qualifications.component';
import Experience from './Subsections/Experience.component';
import Projects from './Subsections/Projects.component';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <NavBar isHomePage={true}/>
        <div className="section">
          <Banner/>
        </div>
        <div className="aboutMe section">
          <Biography />
          <Qualifications />
        </div>
        <div className="exp section">
          <Experience />
        </div>
        <div className="proj section">
          <Projects />
        </div>
      </div>
    )
  }
}

export default HomePage;
