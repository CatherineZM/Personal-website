import React, { useState } from 'react';
import { Paper, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const InfoCard = ({ type, title, organization, description, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullDescription = description.replace(/\\n/g, '\n');
  const descriptionLines = fullDescription.split('\n');
  const isOverWordLimit = fullDescription.split(/\s+/).length > 100;
  const shouldShowExpandButton = !isExpanded && (descriptionLines.length > 4 || isOverWordLimit);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    const contentToShow = isExpanded ? descriptionLines : descriptionLines.slice(0, 4);
    return (
      <>
        {contentToShow.map((line, index) => (
          <React.Fragment key={index}>
            {line} <br />
          </React.Fragment>
        ))}
        {shouldShowExpandButton && <span>... <Button size="small" onClick={toggleExpand}>Expand</Button></span>}
        {isExpanded && <span><Button size="small" onClick={toggleExpand}>Collapse</Button></span>}
      </>
    );
  };

  return (
    <Paper className="proj-cards" elevation={0}>
      <Card variant="outlined" style={{ border: "none", boxShadow: "none" }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>{type}</Typography>
          <Typography variant="h5">{title}</Typography>
          <Typography color="text.secondary">{organization}</Typography>
          <div>{renderDescription()}</div>
        </CardContent>
        <CardActions>
          <Button size="small" href={link}>Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default InfoCard;
