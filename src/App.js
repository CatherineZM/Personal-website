import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./Components/HomePage";
import Resume from "./Components/Resume";
import Capstone from "./Capstone/MainPage";
import ValuePage from "./Capstone/ValuePage";
import DemoPage from "./Capstone/DemoPage";
import AboutUs from "./Capstone/AboutUs";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/value" element={<Capstone />} />
          <Route path="/value/project" element={<ValuePage />} />
          <Route path="/value/demo" element={<DemoPage />} />
          <Route path="/value/about" element={<AboutUs />} />
        </Routes>
      </div>
    )
  }
}

export default App;
