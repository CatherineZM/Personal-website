import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Capstone/styles/MainPage.css';
import '../Capstone/styles/SideBar.css';

import { Container, AppBar, Toolbar, Box, IconButton, Drawer, 
  List, ListItemButton, ListItemText, ListItemIcon, Divider, ListSubheader} 
  from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ChatIcon from '@mui/icons-material/Chat';
import InfoIcon from '@mui/icons-material/Info';

import Banner from './Components/Banner.component';
import logo from './Components/logo-transparent.png';

const MenuItems = [
  {
    Label: "Home",
    link: "/value",
    icon: <HomeIcon />
  },
  {
    Label: "About Project",
    link: "/value/project",
    icon: <ListAltIcon />
  },
  {
    Label: "Demo",
    link: "/value/demo",
    icon: <ChatIcon />
  },
  {
    Label: "About Us",
    link: "/value/about",
    icon: <InfoIcon />
  }
]

class Capstone extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      setOpen: false,
    }
  }

  onClickMenu=(e)=>{
    const new_open = !this.state.open;
    this.setState({ open: new_open });
    this.setState({ setOpen: new_open });
  }

  MenuList=()=>(
    <Box>
      <List>
        {MenuItems.map((menuItem, index) => (
          <ListItemButton key={index} href={menuItem.link}>
            <ListItemIcon> {menuItem.icon} </ListItemIcon>
            <ListItemText primary={menuItem.Label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  render() {
    return (
        <Container className="MainBox" maxWidth={false} disableGutters>
          <Box className="NavBarBox">
            <AppBar className="NavBar" position="float" color='transparent'>
              <Toolbar>
                <IconButton className="MenuBtn" size="large" edge="start" color="inherit" 
                            aria-label="menu" sx={{ mr: 2 }} onClick={this.onClickMenu}>
                  <MenuIcon />
                </IconButton>
                <Drawer className="SideBar" open={this.state.open} anchor="left" onClose={this.onClickMenu}>
                  <div className='Close'>
                    <IconButton onClick={this.onClickMenu}>
                      <ArrowBackIosNewIcon />
                    </IconButton>
                  </div>
                  <Divider />
                  {this.MenuList()}
                  <Divider />
                  <List>
                    <ListSubheader>University of Toronto - Capstone 2022</ListSubheader>
                    <ListSubheader>Team 2022518</ListSubheader>
                  </List>
                  <img src={logo} alt="logo" className='sidebarlogo'/>
                </Drawer>
              </Toolbar>
            </AppBar>
          </Box>
          <Banner />
        </Container>
    )
  }
}

export default Capstone;
