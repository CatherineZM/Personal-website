import React from 'react';

import './styles/Experience.css';

import { Grid, Typography} from '@mui/material';

import contentData from '../data.json';
import InfoCard from '../Elements/InfoCard';

class Experience extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            education: contentData.education,
            workExperience: contentData.workExperience,
        };
    }

    render() {
        return(
            <Grid container spacing={2} className="experience">
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2" className="sectionTitle">
                        Education & Work Experience
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InfoCard type="Education" 
                                title={this.state.education.title}
                                organization={this.state.education.organization}
                                date={this.state.education.date}
                                description={this.state.education.description}
                                link="https://www.ece.utoronto.ca"
                                />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InfoCard type="Work Experience"
                                title={this.state.workExperience.title}
                                organization={this.state.workExperience.organization}
                                date={this.state.workExperience.date}
                                description={this.state.workExperience.description}
                                link="https://www.ibm.com/products/db2"
                                />
                </Grid>
          </Grid>
        )
    }
}

export default Experience;