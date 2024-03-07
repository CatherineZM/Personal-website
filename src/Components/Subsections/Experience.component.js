import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Grid, Typography, Button, Chip} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import TerminalIcon from '@mui/icons-material/Terminal';

import 'react-vertical-timeline-component/style.min.css';
import './styles/Experience.css';

import contentData from '../data.json';

class Experience extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const education = contentData.education;
        const workExperience = contentData.workExperience;
        return(
            <Grid container spacing={2} className="experience" direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2" className="sectionTitle">
                        Experience
                    </Typography>
                </Grid>
                <VerticalTimeline lineColor='#11386e'>
                    <VerticalTimelineElement className="vertical-timeline-element--education"
                                             contentStyle={{ background: '#ACBEDD', color: '#11386e' }}
                                             contentArrowStyle={{ borderRight: '7px solid  #ACBEDD' }}
                                             date={education.date}
                                             iconStyle={{ background: '#ACBEDD', color: '#11386e' }}
                                             icon={<SchoolIcon/>}>
                        <h5 className="expType">Education</h5>
                        <h3 className="vertical-timeline-element-title">{education.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{education.organization}</h4>
                        <p>{education.description}</p>
                        <Button className="expBtnDark" variant="outlined" href={education.url}>About Institution</Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--work"
                                             contentStyle={{ background: '#E3D7E6', color: '#11386e' }}
                                             contentArrowStyle={{ borderRight: '7px solid  #E3D7E6' }}
                                             date={workExperience[0].date}
                                             iconStyle={{ background: '#E3D7E6', color: '#11386e' }}
                                             icon={<LaptopIcon />}>
                        <h5 className="expType">Work - {workExperience[0].type}</h5>
                        <h3 className="vertical-timeline-element-title">{workExperience[0].title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{workExperience[0].organization}</h4>
                        <p>{workExperience[0].description}</p>
                        <div className="expSkillList">
                            {workExperience[0].skillList.map((skill) => 
                                <Chip className="expSkillListItem" variant="outlined" key={skill} label={skill} />
                            )}
                        </div>
                        <Button className="expBtnDark" variant="outlined" href={workExperience[0].url}>About Organization</Button>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--work"
                                             contentStyle={{ background: '#CBE0F4', color: '#11386e' }}
                                             contentArrowStyle={{ borderRight: '7px solid  #CBE0F4' }}
                                             date={workExperience[1].date}
                                             iconStyle={{ background: '#CBE0F4', color: '#11386e' }}
                                             icon={<TerminalIcon />}>
                        <h5 className="expType">Work - {workExperience[1].type}</h5>
                        <h3 className="vertical-timeline-element-title">{workExperience[1].title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{workExperience[1].organization}</h4>
                        <p>{workExperience[1].description}</p>
                        <div className="expSkillList">
                            {workExperience[1].skillList.map((skill) => 
                                <Chip className="expSkillListItem" variant="outlined" key={skill} label={skill} />
                            )}
                        </div>
                        <Button className="expBtnDark" variant="outlined" href={workExperience[1].url}>About Organization</Button>
                    </VerticalTimelineElement>
                </VerticalTimeline>
          </Grid>
        )
    }
}

export default Experience;