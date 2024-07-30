import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectPage.css';

import ProjectNav from './ProjectElements/projectNav.component';

class ProjectPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ProjectNav />
        <div>
          
        </div>
      </div>
    )
  }
}

export default ProjectPage;
