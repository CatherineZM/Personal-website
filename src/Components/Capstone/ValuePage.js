import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Capstone/styles/ValuePage.css';

import { Container, Grid, Typography, Alert, AlertTitle, Divider, Button } from '@mui/material';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar.component';
import ModelFlow from './Components/ModelFlow.component';
import ValueCards from './Components/ValueCards.component';
import ValuePic from './Components/valueTheory.png';

class ValuePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <Container className="ValueContainer" maxWidth={false} disableGutters>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={12} className="ValueNav">
              <NavBar page="project"/>
            </Grid>
            <Grid item xs={2} md={3} className="ValueList" >
              <SideBar />
            </Grid>

            <Grid item xs={9} md={9} className="valueContent">
              <div id="intro" >
                <Typography variant="h4" className="sectionTitle">
                  Introduction to the Values Theory <sup>[1]</sup>
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

              <div id="theory">
                <Typography variant="h4" className="sectionTitle">
                  Schwartz's Value Theory <sup>[1][2]</sup>
                </Typography>
                <Typography variant='body1'>
                The theory identifies ten motivationally distinct value orientations that people in all cultures recognize, and it specifies the dynamics 
                of conflict and congruence among these values. It aims to be a unifying theory for the field of human motivation, a way of organizing
                the different needs, motives, and goals proposed by other theories.
                </Typography>
                <img src={ValuePic} alt="value theory"/>
                <Typography variant="body2" className='referenceInText'>
                  Theoretical model of relations among ten motivational types of values <sup>[2]</sup>
                </Typography>
                <Typography variant="body1">
                  The conflicts and congruities among all ten basic values yield an integrated structure of values. 
                  This structure can be summarized with two orthogonal dimensions:
                  <ul>
                    <li> <strong>Self-enhancement vs. self-transcendence:</strong>
                    On this dimension, power and achievement values oppose universalism and benevolence values. 
                    Both of the former emphasize pursuit of self-interests, whereas both of the latter involve concern 
                    for the welfare and interests of others.</li>
                    <li><strong>Openness to change vs. conservation:</strong>
                    On this dimension, self-direction and stimulation values oppose security, conformity and tradition values. 
                    Both of the former emphasize independent action, thought and feeling and readiness for new experience, 
                    whereas all of the latter emphasize self-restriction, order and resistance to change. 
                    </li>
                    <li>Hedonism shares elements of both openness and self-enhancement.</li>
                  </ul> 
                </Typography>
              </div>
              
              <div>
                <Typography variant="h4" className="sectionTitle">
                  List of Values and Definitions <sup>[1][2]</sup>
                </Typography>
                <Typography variant='body1'>
                  To explain what each value means and show examples, here is the list of value:
                </Typography>
                <ValueCards />
              </div>
              
              <div id="structure">
                <Typography variant="h4" className="sectionTitle">
                  System Overview
                </Typography>
                <Typography variant="body1">
                  The following flow diagram demonstrates the system overview of our model. Starting with receiving the user input, 
                  the product will first covert the user input into machine understandable word vectors. The word vector is then passed
                  into our models. There are 10 binary classification models corresponding to 10 different values. The 10 models have identical
                  structures which is a GPT2 classifier with a CNN head. 
                  <br/><br/>
                  To read more about GPT2, please refer to <a href="https://huggingface.co/docs/transformers/model_doc/gpt2">here</a>.
                </Typography>
                <ModelFlow className="model"/>
              </div>
              
              <div id="useful">
                <Typography variant="h4"  className="sectionTitle">
                  How is Our Product Useful?
                </Typography>
                <Typography variant="body1">
                  The product is useful because it can be used as an evidence for motivational interviewing.
                  <Alert severity="info">
                    <AlertTitle><h5>Motivational Interview <sup>[3]</sup></h5></AlertTitle>
                    <p>Motivational interviewing is a collaborative, goal-oriented style of communication with particular attention to the language of change. 
                    It is designed to strengthen personal motivation for and commitment to a specific goal by eliciting and exploring the person’s own reasons for change within an atmosphere of acceptance and compassion.
                    </p>
                  </Alert>
                  As the motivational interviewing techniques can be used in the following scenarios: <sup>[4]</sup>
                  <ul>
                    <li>Medication adherence</li>
                    <li>Management of the SNAP (smoking, nutrition, alcohol and physical activity) risk factors</li>
                    <li>Engagement in prevention or management programs for diabetes or cardiovascular health </li>
                    <li>Management of substance abuse problems</li>
                    <li>Management of problem gambling or sexual risk taking</li>
                    <li>Pain management</li>
                  </ul>
                </Typography>
              </div>

              <div>
                <Button className="tryBtn" href="/value/demo">
                    TRY IT OUT →
                </Button>
              </div>

              <Divider />
              <Typography variant="body1">
                Reference:
              </Typography>
              <Typography variant="body2" className='reference'>
                [1] D. Potts, “The schwartz theory of basic values and some implications for political philosophy,” Policy of Truth, 18-Aug-2015. [Online]. Available: https://irfankhawajaphilosopher.com/2015/08/12/the-schwartz-theory-of-basic-values-and-some-implications-for-political-philosophy/. [Accessed: 06-Mar-2023]. 
                <br/> [2] S. H. Schwartz, “Basic Human Values: An Overview.” [Online]. Available: https://www.uranos.ch/research/references/Schwartz_2006/Schwartzpaper.pdf. [Accessed: 06-Mar-2023]. 
                <br/> [3] W. R. Miller and S. Rollnick, Motivational interviewing: Helping people change, Illustrated. New York, NY: Guilford Publications Inc., 2012. 
                <br/> [4] Hall, K., Gibbie, T. and Lubman, D.I. (2012) Motivational interviewing techniques, Focus - Psychological strategies. McGill University. Available at: https://www.mcgill.ca/familymed/files/familymed/motivational_counseling.pdf (Accessed: March 6, 2023). 
              </Typography>
              <Footer />
            </Grid>
          </Grid>
        </Container>
    )
  }
}

export default ValuePage;
