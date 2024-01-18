import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HomePage from "./Components/HomePage";
import Resume from "./Components/Resume";
import Capstone from "./Capstone/MainPage";
import ValuePage from "./Capstone/ValuePage";
import DemoPage from "./Capstone/DemoPage";
import AboutUs from "./Capstone/AboutUs";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Comfortaa'
    }
  }
});

class App extends React.Component {
  render() {
    return(
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
}

export default App;
