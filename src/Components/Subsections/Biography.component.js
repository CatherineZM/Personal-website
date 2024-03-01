import React from 'react';
import { Grid, Typography, List, ListItem, Button } from '@mui/material';

import portrait from '../../img/photo.jpg';
import './styles/Biography.css';

class Biography extends React.Component {
    render() {
        return(
            <Grid container spacing={2} className="biography" id="biography">
                <Grid item xs={0} md={1} />
                <Grid item xs={12} md={3}>
                <img className="profilePic" src={portrait} alt="Catherine Zhou Pic" />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant='h4' component="h2">
                    About Me
                </Typography>
                <Typography className="quote">
                    I recently completed my Bachelor's degree from the University of Toronto in Electrical and Computer Engineering 
                    with a minor in Engineering Business and a certification in Artificial Intelligence. 
                    And I had a 16-months experience as a Software Developer at IBM Canada. 
                    I have a strong passion for programming and software development, especially in web applications. 
                    I have acquired multiple skills in various data structures, testing methodologies, and algorithms, 
                    as well as in various programming languages such as Python, JavaScript, C/C++, Perl, Java, SQL, HTML, and more.
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