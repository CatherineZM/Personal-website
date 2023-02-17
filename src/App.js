import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage";
import Resume from "./Components/Resume";
import Capstone from "./Components/Capstone/MainPage";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/value" element={<Capstone />} />
        </Routes>
      </div>
    )
  }
}

export default App;
