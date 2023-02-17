import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Capstone/styles/MainPage.css';

import { Container, AppBar, Toolbar, Box, IconButton, Drawer, 
  List, ListItemButton, ListItemText, Divider, ListItem, Avatar} 
  from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import Banner from './Components/Banner.component';

const MenuItems = [
  {
    Label: "Home",
    link: "/value"
  },
  {
    Label: "List of Values",
    link: "/value/list"
  },
  {
    Label: "Demo",
    link: "/value/demo"
  },
  {
    Label: "About Us",
    link: "/value/about"
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
                <Drawer open={this.state.open} anchor="left" onClose={this.onClickMenu}>
                  {this.MenuList()}
                  <Divider />
                  <List>
                    <ListItem>
                      <ListItemText primary="Attribution:"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Team 2022518 Members:"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Boyuan Shao"
                    secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Mo Zhou"
                    secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Qiyan Liu"
                    secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Yonghai Yu"
                    secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Special Thanks to:"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Prof. Jonathan Rose"
                      secondary="Supervisor"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Inci McGreal"
                      secondary="Administrator"/>
                    </ListItem>
                  </List>
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
