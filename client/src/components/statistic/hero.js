import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  container: {
    paddingTop: '20px',
    paddingBottom: '30px',
    paddingLeft: '20px'
  }
});


const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant={'h3'} color='black'>
         Elon Musk
      </Typography>
    </div>
  )
}

export default Hero
