import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage";
import Resume from "./Components/Resume";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    )
  }
}

export default App;
