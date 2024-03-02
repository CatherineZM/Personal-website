import React from 'react';
import { Grid, Typography, List, ListItem, Button } from '@mui/material';

import portrait from '../../img/photo.jpg';
import './styles/Biography.css';

class Biography extends React.Component {
    render() {
        return(
            <Grid container spacing={2} className="biography" id="biography" direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12} md={3}>
                    <img className="profilePic" src={portrait} alt="Catherine Zhou Pic" />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant='h4' component="h2">
                    About Me
                </Typography>
                <Typography className="bioParagraph">
                    Henry D.Thoreau once wrote in Walden: 
                    <p>Not till we are lost, in other words, not till we have lost the world, do we begin to find ourselves.</p>
                    That was me when I graduated from high school, being lost and not knowing what my passion is. 
                    I applied to Electrical & Computer Engineering at the University of Toronto just because I thought the industry has a large demand for people.
                    Maintaining being lost for the first two years, one course changed my world.
                </Typography>
                <Typography className="bioParagraph">
                    I decided to take CSC309 - Introduction to web programming, just to experience what front-end development is like and try it out.
                    The course changed my life. I instantly fell in love with the ability to visualize my code and see the vivid components on the screen.
                    Combining with my passion in helping others, I started working with NGOs on their technical projects by joining the Volunteer Engineering Experience Program.
                    Now I'm a passionate Full Stack Developer who hope to utilize their technical knowledge to change people's life.
                </Typography>
                <List>
                    <ListItem>Email: </ListItem>
                    <ListItem>Location: Toronto</ListItem>  
                    <ListItem>Name: </ListItem>
                </List>
                <Button>Hi</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Biography;