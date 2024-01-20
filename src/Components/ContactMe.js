import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contact.css';

import NavBar from './NavBar';

class ContactMe extends React.Component {
  
  render() {
    
    return (
      <div>
       <NavBar page="contact" isHomePage={false}/>

      </div>
    )
  }
}

export default ContactMe;