import React from 'react';

// style sheets
import './styles/ContactMe.css';

// local components
import ContactForm from '../Elements/ContactForm';

// components from libraries
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

class ContactMe extends React.Component {

    render() {
        return(
            <Grid container spacing={2} columnSpacing={5} id="contactMe" className="contactMe" direction="row" justifyContent="center" alignItems="flex-start">
                <Grid xs={12}>
                    <Typography className="sectionTitle" variant='h4' component="h2">
                        Get In Touch with Me
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <List>
                        <ListItemButton href="mailto:catherine.zm@outlook.com">
                            <ListItemIcon>
                                <MailOutlineIcon className="contactIcon"/>
                            </ListItemIcon>
                            <ListItemText primary="catherine.zm@outlook.com" />
                        </ListItemButton>
                        <ListItemButton href="https://www.linkedin.com/in/catherine-zhou-1016/">
                            <ListItemIcon>
                                <LinkedInIcon className="contactIcon"/>
                            </ListItemIcon>
                            <ListItemText primary="Catherine Zhou" />
                        </ListItemButton>
                        <ListItemButton href="https://github.com/CatherineZM">
                            <ListItemIcon>
                                <GitHubIcon className="contactIcon"/>
                            </ListItemIcon>
                            <ListItemText primary="CatherineZM" />
                        </ListItemButton>
                        <ListItemButton href="https://instagram.com/catherine.zm?igshid=YWJhMjlhZTc=">
                            <ListItemIcon>
                                <InstagramIcon className="contactIcon"/>
                            </ListItemIcon>
                            <ListItemText primary="catherine.zm" />
                        </ListItemButton>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon className="contactIcon"/>
                            </ListItemIcon>
                            <ListItemText primary="North York, ON" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={5}>
                    <ContactForm />
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body1' className="copyright">
                        &copy; Copyright 2024, Created by Mo Zhou. 
                        All Rights Reserved.
                    </Typography>
                </Grid>
            </Grid>
        )
    }

}

export default ContactMe;
