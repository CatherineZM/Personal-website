import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Chip } from '@mui/material';

const InfoCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullDescription = project.description.replace(/\\n/g, '\n');
  const descriptionLines = fullDescription.split('\n');
  const isOverWordLimit = fullDescription.split(/\s+/).length > 25;
  const shouldShowExpandButton = !isExpanded && (descriptionLines.length > 2 || isOverWordLimit);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    const contentToShow = isExpanded ? descriptionLines : descriptionLines.slice(0, 2);
    return (
      <>
        {contentToShow.map((line, index) => (
          <React.Fragment key={index}>
            {line} <br />
          </React.Fragment>
        ))}
        {shouldShowExpandButton && <span>... <Button className="expandComp" size="small" onClick={toggleExpand}>Expand</Button></span>}
        {isExpanded && <span><Button className="expandComp" size="small" onClick={toggleExpand}>Collapse</Button></span>}
      </>
    );
  };

  return (
    <div className="proj-cards" elevation={0}>
      <Card className="projectCard" variant="outlined" style={{ backgroundColor:'transparent' }}>
        <CardContent>
          <Typography className="projectDate" variant="h6" color="text.secondary" gutterBottom>{project.date}</Typography>
          <Typography className="projectName" variant="h5">{project.name}</Typography>
          <Typography className="projectOrgName" color="text.secondary">{project.organization}</Typography>
          <Typography className="projectTitle" color="text.secondary">{project.title}</Typography>
          <div>{renderDescription()}</div>
          {project.skillList.map((skill) => 
            <Chip className="proSkillListItem" variant="outlined" key={skill} label={skill} />
          )}
        </CardContent>
        <CardActions>
          {project.hasOwnProperty('demo_url') ? <Button className="projectButton" variant="outlined" href={project.demo_url}>Website</Button> : null}
          {project.hasOwnProperty('code_url') ? <Button className="projectButton" variant="outlined" href={project.code_url}>Source Code</Button> : null}
          {project.hasOwnProperty('org_url') ? <Button className="projectButton" variant="outlined" href={project.org_url}>About Organization</Button> : null}
        </CardActions>
      </Card>
    </div>
  );
};

export default InfoCard;
