import React from 'react';
import { Box, Button, Grid} from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css';

class Banner extends React.Component {
  
  render() {
    return (
      <Box className="Banner">
          <Grid container className="titleBox" 
                  direction="column" spacing={0}>
              <Grid xs={12} item className='title'>
                  <h1>human value detection</h1>
                  <h1>in text</h1>
                  <h2>using natural language processing</h2>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={6}>
                  <Button className="tryBtn" href="/value/demo">
                      TRY IT OUT →
                  </Button>
              </Grid>
              <Grid item xs={2} />
          </Grid>
      </Box>
    )
  }
}

export default Banner;



