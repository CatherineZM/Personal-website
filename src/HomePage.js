import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';

import NavBar from './Components/NavBar';
import Banner from './Components/HomePage/Banner.component';

class HomePage extends React.Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
      </div>
    )
  }
}

export default HomePage;
