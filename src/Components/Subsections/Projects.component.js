import React from 'react';

import './styles/Projects.css';

import { Grid, Typography, Card, CardContent, CardActions, Button, Chip} from '@mui/material';

import contentData from '../data.json';
import InfoCard from '../Elements/InfoCard';

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: contentData.projectExperience,
        };
    }

    render() {
        return(
            <Grid container spacing={2} columnSpacing={5} className="projects" direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2" className="sectionTitle">
                        Project Highlights
                    </Typography>
                </Grid>
                {this.state.projects.map((project) => {
                    if(project.highlight){
                        return(
                            <Grid item key={project.id} xs={12} md={3} style={{ height: '100%' }}>
                                <InfoCard project={project} />
                            </Grid>
                        )
                    }
                    return null
                })}
            </Grid>
        )
    }
}

export default Projects;
