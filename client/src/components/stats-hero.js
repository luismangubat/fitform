import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  profileName: {
    fontSize: '40px',

  },
  
  bmiStats: {
    fontSize: '40px',
    textAlign: 'right'



  }
}));

const Hero = () => {

  const classes = useStyles();

  return(
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.profileName}>
        Elon Musk
      </Grid>
      <Grid item xs={6} className={classes.bmiStats}>
        'Stats'
      </Grid>  
    </Grid>
  )
}

export default Hero; 