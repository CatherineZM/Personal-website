import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ValuePage.css';

import { Card, CardContent, Chip, Typography } from '@mui/material';

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
      definition: "Excitement, novelty, and challenge in life.",
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

class ValueCards extends React.Component {
  
    render() {
        return (
            <div>
                {valueExplanation.map((value, index) => (
                <Card key={index} id={value.name} className="valueCards" variant="outlined">
                <CardContent>
                    <Typography variant="h5">{value.name}</Typography>
                    <Typography color="text.secondary">{value.category}</Typography>
                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>Definition:</Typography>
                    <Typography variant="body1">{value.definition}</Typography>
                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>Example Statement:</Typography>
                    <Typography variant="body1">{value.example}</Typography>
                    <Typography variant="body2" sx={{fontWeight: 'bold'}}>Related Values: </Typography>
                    {value.related.map((relate, i) => (
                    <Chip className="valueChip" key={i} label={relate} variant="outlined"/>
                    ))}
                </CardContent>
                </Card>
            ))}
            </div>
        )
    }
}

export default ValueCards;