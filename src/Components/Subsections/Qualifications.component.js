import React from 'react';

import './styles/Qualification.css';

import { Grid, Typography} from '@mui/material';

import contentData from '../data.json'
import SkillChart from '../Elements/SkillChart';
import IDEChart from '../Elements/IDEChart';

class Qualifications extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          languages: contentData.languages.name,
          langData: contentData.languages.proficiency,
        };
    }

    render() {
        return(
            <Grid container spacing={2} className="skillChart qualification" direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12}>
                    <Typography className="sectionTitle" variant='h4' component="h2">
                        Highlight of Qualifications
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' component="h3" className="skillSubtitle">
                        Programming Languages
                    </Typography>
                    <SkillChart title="Proficiency"
                        list={this.state.languages} 
                        listData={this.state.langData}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant='h5' component="h3" className="skillSubtitle">
                        Softwares & IDEs
                    </Typography>
                    <IDEChart/>
                </Grid>
            </Grid>
        )
    }
}

export default Qualifications;