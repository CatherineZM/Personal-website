import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';

import { Document, Page,} from 'react-pdf';
import NavigationBar from './NavBar';
import resumePDF from '../img/resume.pdf';

class Resume extends React.Component {
  
  render() {
    
    return (
      <div>
       <NavigationBar />
       <div>
           <Document file={resumePDF}>
            <Page pageNumber={1} />
           </Document>
           <p>Page 1 of 2</p>
       </div>
      </div>
    )
  }
}

export default Resume;