import React from 'react';

import './styles/Qualification.css';

import { Collapse, Grid, List, Typography, ListItemButton, ListItemText, Chip} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import contentData from '../data.json'
import SkillChart from '../Elements/SkillChart';

class Qualifications extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          softwareSkills: contentData.software,
          interpersonal: contentData.interpersonal,
          techOpen: true,
          interOpen: true
        };
    }

    handleTechClick = () =>{
        const next_open = !this.state.techOpen;
        this.setState({techOpen: next_open});
    }

    handleInterClick = () =>{
        const next_open = !this.state.interOpen;
        this.setState({interOpen: next_open});
    }

    render() {
        const languages = contentData.languages.map(function (item) {
            return item.name;
        });
        const langData = contentData.languages.map(function (item) {
            return item.proficiency;
        });
        return(
            <Grid container spacing={2} className="skillChart qualification" direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12}>
                    <Typography className="sectionTitle" variant='h4' component="h2">
                        Highlight of Qualifications
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <figure><embed src="https://wakatime.com/share/@018df785-897f-45ba-b9a4-4ae9f6045b57/ee9aa30d-9628-4f9e-a1d8-67ba63de6e3a.svg"></embed></figure>
                    <Typography variant='h5' component="h3" className="skillSubtitle">
                        Programming Languages
                    </Typography>
                    <SkillChart title="Proficiency"
                        list={languages} 
                        listData={langData}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant='h5' component="h3" className="skillSubtitle">
                        Softwares & IDEs
                    </Typography>
                   
                    <List>
                        <ListItemButton onClick={this.handleTechClick}>
                            <ListItemText primary="Software/IDEs" />
                            {this.state.techOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={this.state.techOpen} className="skillList">
                            {this.state.softwareSkills.map((skill) => 
                                <Chip className="skillListItem MuiChip-labelSmall" key={skill.id} label={skill.name} style={{ backgroundColor: skill.color }} />
                            )}
                        </Collapse>
                        <ListItemButton onClick={this.handleInterClick}>
                            <ListItemText primary="Interpersonal Skills" />
                            {this.state.interOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={this.state.interOpen} className="skillList">
                            {this.state.interpersonal.map((skill) => 
                                <Chip className="skillListItem" key={skill.id} label={skill.name} style={{ backgroundColor: skill.color }} />
                            )}
                        </Collapse>
                    </List>
                </Grid>
            </Grid>
        )
    }
}

export default Qualifications;