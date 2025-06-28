import React from 'react';

import './styles/Projects.css';

import { Grid, Typography, Button } from '@mui/material';

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
            <Grid container spacing={2} columnSpacing={5} className="projects" direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2" className="sectionTitle">
                        Project Highlights
                    </Typography>
                </Grid>
                {this.state.projects.map((project) => {
                    if(project.highlight){
                        return(
                            <Grid item key={project.id} xs={12} md={3} className="projectCardContainer" style={{display: 'flex'}}>
                                <InfoCard project={project} />
                            </Grid>
                        )
                    }
                    return null
                })}
                <Grid item xs={12} className="projectLinkBox">
                    <Button className="projectLink" href="/experience">
                        More Projects (Under construction) →
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default Projects;
