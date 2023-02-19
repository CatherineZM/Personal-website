import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Capstone/styles/ValuePage.css';

import { Container, Drawer, Grid, List, ListItemButton, ListItemText, 
         Typography, Collapse, Card, CardContent, Chip} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import NavBar from './Components/NavBar';

const values = ["Achievement", "Benevolence", "Conformity", "Hedonism", "Power",
                "Security", "Self-Direction", "Stimulation", "Tradition", "Universalism"]

const valueExplanation = [
  {
    name: "Achievement",
    category: "Self-Enhancement",
    definition: "Personal success through demonstrating competence according to social standards.",
    example: "Becoming a fund manager is my ultimate goal for my career path.",
    related: ["success","capability", "ambition", "influence", 
              "intelligence", "self-respect"]
  },
  {
    name: "Benevolence",
    category: "Self-Transcendence",
    definition: "Preservation and enhancement of the people with whom one is in frequent personal contact.",
    example: "I once helped an injured animal on the street.",
    related: ["helpfulness", "honesty", "forgiveness", 
              "loyalty", "responsibility", "friendship"]
  },
  {
    name: "Conformity",
    category: "Conservation",
    definition: "Restraint of actions, inclinations, and impulses likely to upset or harm others and violate social expectations or norms.",
    example: "When I have discussions with my close friends, I always think before I say something so that it doesn't hurt their feelings.",
    related: ["self-discipline", "obedience"]
  },
  {
    name: "Hedonism",
    category: "Openness to Change, Self-Enhancement",
    definition: "Pleasure and sensuous gratification for oneself.",
    example: "I'd enjoy my day-off lying on the beach.",
    related: ["pleasure", "enjoy life"]
  },
  {
    name: "Power",
    category: "Self-Enhancement",
    definition: "Social status and prestige, control or dominance over people and resources.",
    example: "I'm always ready to be a team leader in a project.",
    related: ["authority", "leadership", "dominance", "social power", "wealth"]
  },
  {
    name: "Security",
    category: "Conservation",
    definition: "Safety, harmony, and stability of society, of relationships, and of self.",
    example: "I spend as much time as I can with my family.",
    related: ["cleanliness", "family security", "national security", 
              "stability of social order", "reciprocation of favours", 
              "health", "sense of belonging"]
  },
  {
    name: "Self-Direction",
    category: "Openness to Change",
    definition: "Independent thought and action choosing, creating, exploring.",
    example: "I like to learn to do things for myself.",
    related: ["creativity", "freedom", "independence", 
              "curiosity", "choosing your own goals"]
  },
  {
    name: "Stimulation",
    category: "Openness to Change",
    definition: "Excitement, novelty, and challenge in life",
    example: "My dream is to sky-dive once.",
    related: ["daring activities", "varied life", "exciting life"]
  },
  {
    name: "Tradition",
    category: "Conservation",
    definition: "Respect, commitment, and acceptance of the customs and ideas that traditional culture or religion provides.",
    example: "I think it's very important to treat your elders with respect.",
    related: ["accepting one's portion in life", "humility", "devoutness",
              "respect for tradition", "moderation"]
  },
  {
    name: "Universalism",
    category: "Self-Transcendence",
    definition: "Understanding, appreciation, tolerance and protection for the welfare of all people and for nature.",
    example: "I think global warming is a serious issue and we should all prevent that from happening.",
    related: ["broadmindedness", "wisdom", "social justice",
              "equality", "a world at peace", "a world of beauty",
              "unity with nature", "protecting the environment",
              "inner harmony"]
  },

]

class ValuePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      setOpen: false,
    }
  }

  handleClick=(e)=>{
    const new_open = !this.state.open;
    this.setState({ open: new_open });
    this.setState({ setOpen: new_open });
  }

  render() {
    return (
        <Container className="ValueContainer" maxWidth={false} disableGutters>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <NavBar />
            </Grid>
            <Grid item xs={3} className="ValueList" >
              <List component="nav">
                <ListItemButton>
                  <ListItemText primary="Introduction to the Values Theory" />
                </ListItemButton>
                <ListItemButton onClick={this.handleClick}>
                  <ListItemText primary="List of Values and Definitions" />
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {values.map((value, index) => (
                      <ListItemButton key={index}>
                        <ListItemText primary={value} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </List>
            </Grid>
            <Grid item xs={8}>
              <div>
                <Typography variant="h4">
                  Introduction to the Values Theory
                </Typography>
                <Typography variant="body1">
                  The main features of the conception of basic values implicit in the writings of many theorists and researchers as follows:
                </Typography>
                <ul>
                  <li> Values are beliefs. But they are beliefs tied inextricably to emotion, not objective, cold ideas. </li>
                  <li> Values are a motivational construct. They refer to the desirable goals people strive to attain. </li>
                  <li> Values transcend specific actions and situations. They are abstract goals. 
                    The abstract nature of values distinguishes them from concepts like norms and attitudes, 
                    which usually refer to specific actions, objects, or situations.</li>
                  <li> Values guide the selection or evaluation of actions, policies, people, and events. 
                    That is, values serve as standards or criteria. </li>
                  <li> Values are ordered by importance relative to one another. 
                    People’s values form an ordered system of value priorities that characterize them as individuals. 
                    This hierarchical feature of values also distinguishes them from norms and attitudes.</li>
                </ul>
              </div>
              <div>
                <Typography variant="h4">
                  List of Values and Definitions
                </Typography>
                {valueExplanation.map((value, index) => (
                  <Card key={index}>
                    <CardContent>
                      <Typography variant="h5">{value.name}</Typography>
                      <Typography color="text.secondary">{value.category}</Typography>
                      <Typography variant="body1" sx={{fontWeight: 'bold'}}>Definition:</Typography>
                      <Typography variant="body1">{value.definition}</Typography>
                      <Typography variant="body1" sx={{fontWeight: 'bold'}}>Example Statement:</Typography>
                      <Typography variant="body1">{value.example}</Typography>
                      <Typography variant="body2" sx={{fontWeight: 'bold'}}>Related Values: </Typography>
                      {value.related.map((relate, i) => (
                        <Chip key={i} label={relate} variant="outlined"/>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
    )
  }
}

export default ValuePage;
