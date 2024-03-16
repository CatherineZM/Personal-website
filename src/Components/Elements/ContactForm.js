import React from 'react';

// style sheets
import '../Subsections/styles/ContactMe.css';

// components from libraries
import { styled } from '@mui/material/styles';
import { Grid, TextField, Button } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjvnebzy");
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#FFF',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FFF',
        },
        '& .MuiInputLabel-root':{
            color: '#FFF',
        },
        '& .MuiInputBase-input':{
            color: '#FFF',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FFF',
            },
            '&:hover fieldset': {
                borderColor: '#FFF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFF',
            },
        },
    });

  if (state.succeeded) {
      return <p className="formFeedback">Thank you for contacting me! I will get back to you as soon as possible.</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CssTextField
                    fullWidth
                    id="name" 
                    className="contactField"
                    type="name"
                    name="full-name"
                    label="Full Name"
                    variant="outlined"
                    margin="dense"
                />
            </Grid>
            <Grid item xs={12}>
                <CssTextField
                    fullWidth
                    id="email" 
                    className="contactField" 
                    type="email" 
                    name="email" 
                    label="Email Address" 
                    variant="outlined"
                    margin="dense"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </Grid>
            <Grid item xs={12}>
                <CssTextField
                    fullWidth
                    id="message"
                    className="contactField"
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    margin="normal"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </Grid>
            <Grid item xs={12}>
                <Button className="contactButton" fullWidth type="submit" variant="outlined" disabled={state.submitting}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    </form>
  );
}

export default ContactForm;
