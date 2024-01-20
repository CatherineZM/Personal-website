import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Personal Website
import HomePage from "./Components/HomePage";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe";

// Capstone Content
import Capstone from "./Capstone/MainPage";
import ValuePage from "./Capstone/ValuePage";
import DemoPage from "./Capstone/DemoPage";
import AboutUs from "./Capstone/AboutUs";

const theme = createTheme({
  components: {
    typography: {
      allVariants: {
        fontFamily: 'Comfortaa'
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCard: {
      styleOverrides:{
        root:{
          backgroundColor: 'transparent',
        }
      }
    },
    MuiChip: {
      styleOverrides:{
        root:{
          backgroundColor: '#11386e',
          borderColor: '#11386e',
          borderWidth: '3px',
          opacity: '0.8',
          color:'white',
        }
      }
    }
  }
  
});

class App extends React.Component {
  render() {
    return(
      <ThemeProvider theme={theme}>
          <div className="App">
            <Routes>
              {/* Personal Website */}
              <Route path="/" element={<HomePage />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<ContactMe />} />

              {/* Capstone Content */}
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
