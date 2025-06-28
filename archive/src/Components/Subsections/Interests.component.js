import React from 'react';

// style sheets
import './styles/Interests.css';

// images
import bake1 from '../../img/Interests/bake1.jpg';
import bake2 from '../../img/Interests/bake2.jpg';
import bake3 from '../../img/Interests/bake3.jpg';
import crochet1 from '../../img/Interests/crochet1.jpg';
import crochet2 from '../../img/Interests/crochet2.jpg';
import crochet3 from '../../img/Interests/crochet3.jpg';
import travel1 from '../../img/Interests/travel1.jpg';
import travel2 from '../../img/Interests/travel2.jpg';
import travel3 from '../../img/Interests/travel3.jpg';

// components from libraries
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';

class Interests extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            interests: [
                {"id": 1,
                "name": "Crochet",
                "description": "I enjoy crocheting practical items. It's so much fun turning strings into beautiful things.",
                "photo1": {"src": crochet1, "caption": "Cat Collar"},
                "photo2": {"src": crochet2, "caption": "Purse"},
                "photo3": {"src": crochet3, "caption": "Rose Key Chain"}},
                {"id": 2,
                "name": "Baking",
                "description": "I believe food brings the world closer. Therefore, desserts warm people's heart.",
                "photo1": {"src": bake1, "caption": "Vanilla Cream Puffs"},
                "photo2": {"src": bake2, "caption": "Lemon Meringue Pie"},
                "photo3": {"src": bake3, "caption": "Strawberry Mousse"}},
                {"id": 3,
                "name": "Travel",
                "description": "Traveling is the best way to learn cultures. \"People don't take trips, trips take people.\" ",
                "photo1": {"src": travel1, "caption": "Panda in Chengdu"},
                "photo2": {"src": travel2, "caption": "Lake in Algonquin"},
                "photo3": {"src": travel3, "caption": "The Great Wall in Beijing"}},
                
            ],
        };
    }

    renderCarousel(interest){
        return(
            <Carousel indicators={true} controls={true} interval={null} >
                <Carousel.Item>
                    <img src={interest.photo1.src} alt={interest.photo1.caption} style={{ width: '100%' }}/>
                    <Carousel.Caption>
                        <p className="interestCaption">{interest.photo1.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={interest.photo2.src} alt={interest.photo2.caption} style={{ width: '100%' }}/>
                    <Carousel.Caption>
                    <p className="interestCaption">{interest.photo2.caption}</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={interest.photo3.src} alt={interest.photo3.caption} style={{ width: '100%' }}/>
                    <Carousel.Caption>
                    <p className="interestCaption">{interest.photo3.caption}</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }

    renderInterestCard(interest){
        return(
            <Card className="interestCard" variant="outlined" style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                {this.renderCarousel(interest)}
                <CardContent>
                    <Typography className="interestName" gutterBottom variant="h5" component="div">
                        {interest.name}
                    </Typography>
                    <Typography className="interestDes" variant="body2" color="text.secondary">
                        {interest.description}
                    </Typography>
                </CardContent>
            </Card>
        )
        
    }

    render() {
        return(
            <Grid container spacing={2} columnSpacing={5} className="interests" direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2" className="sectionTitle">
                        Personal Interests
                    </Typography>
                </Grid>
                {this.state.interests.map((interest) => 
                    <Grid item xs={12} md={3} key={interest.id} style={{display: 'flex'}}> 
                        {this.renderInterestCard(interest)}
                    </Grid>
                )}
            </Grid>
        )
    }
}

export default Interests;
