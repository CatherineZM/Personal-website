import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container} from '@mui/material';

import NavBar from './Components/NavBar';

class AboutUs extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <Container maxWidth={false} disableGutters>
            <NavBar page="about"/>
            {/* <Divider />
                  <List>
                    <ListSubheader>Attribution:</ListSubheader>
                    <ListSubheader>Team 2022518 Members:</ListSubheader>
                    <ListItem>
                      <ListItemAvatar><Avatar><PersonIcon /></Avatar></ListItemAvatar>
                      <ListItemText primary="Boyuan Shao" secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar><Avatar><PersonIcon /></Avatar></ListItemAvatar>
                      <ListItemText primary="Mo Zhou" secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar><Avatar><PersonIcon /></Avatar></ListItemAvatar>
                      <ListItemText primary="Qiyan Liu" secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar><Avatar><PersonIcon /></Avatar></ListItemAvatar>
                      <ListItemText primary="Yonghai Yu" secondary="UofT ECE2T2+PEY"/>
                    </ListItem>
                    <ListSubheader>Special Thanks to:</ListSubheader>
                    <ListItem>
                      <ListItemAvatar><Avatar><PersonIcon /></Avatar></ListItemAvatar>
                      <ListItemText primary="Prof. Jonathan Rose" secondary="Supervisor"/>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar><Avatar><PersonIcon /></Avatar></ListItemAvatar>
                      <ListItemText primary="Ms. Inci McGreal" secondary="Administrator"/>
                    </ListItem>
                  </List> */}
        </Container>
    )
  }
}

export default AboutUs;
