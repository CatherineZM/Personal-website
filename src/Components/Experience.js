import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/experience.css';

import NavBar from './NavBar';

class Experience extends React.Component {
  
  render() {
    
    return (
      <div>
       <NavBar page="experience" isHomePage={false}/>

      </div>
    )
  }
}

export default Experience;