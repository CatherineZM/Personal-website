import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';

import portrait from '../../img/photo.jpg';
import resume from  '../Mo_Zhou_Resume.pdf';
import './styles/Biography.css';

class Biography extends React.Component {
    render() {
        return(
            <Grid container spacing={2} className="biography" direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12}>
                    <Typography className="sectionTitle" variant='h4' component="h2">
                        About Me
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Alert className="bioQuote" icon={false} variant="outlined" severity="info">
                        <Typography variant="body1" gutterBottom>
                            "Not till we are lost, in other words, not till we have lost the world, do we begin to find ourselves."  -- Henry D.Thoreau
                        </Typography>
                    </Alert>
                    <Typography className="bioParagraph" variant="body1" gutterBottom>
                        That was me when I graduated from high school, being lost and not knowing what my passion is. 
                        I applied to Electrical & Computer Engineering at the University of Toronto just because I thought the industry has a large demand for people.
                    </Typography>
                    <Typography className="bioParagraph" variant="body1" gutterBottom>
                        I was still lost for the first two years in Canada. Until one course changed my world - CSC309: Introduction to web programming. 
                        I wanted to learn new knowledge and experience a different aspect of programming. 
                        I didn't expect that this course would change my life. 
                        I instantly fell in love with the ability to visualize my code and see the vivid components on the screen.
                    </Typography>
                    <Typography className="bioParagraph" variant="body1" gutterBottom>
                        Combining with my passion in helping others, I started working with NGOs on their technical projects by joining the Volunteer Engineering Experience Program.
                        Now I'm a passionate Full Stack Developer who hope to utilize my technical knowledge to improve people's life.
                    </Typography>
                    <Grid container={true} item xs={12} spacing={1}> 
                        <Grid item={true} xs={6} >
                            <Button className="bioBtn" variant="outlined" download="Mo_Zhou_Resume" href={resume}>
                                Download Resume
                            </Button>
                        </Grid>
                        <Grid item={true} xs={6} >
                            <Button className="bioBtn" variant="outlined" 
                                    onClick={(e) => {e.preventDefault();
                                                    window.scrollTo({top: document.querySelector("#contactMe").offsetTop,
                                                    behavior: "smooth"});}}>
                                Contact Me
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <img className="profilePic" src={portrait} alt="Catherine Zhou Pic" />
                </Grid>
            </Grid>
        )
    }
}

export default Biography;