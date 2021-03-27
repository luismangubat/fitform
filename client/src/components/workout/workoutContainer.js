import React, { useState }from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



 
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: 'secondary'
  },

  tagline: {
    textAlign: 'center'
  }, 


  outerContainer: {
    textAlign: 'center'
  },

  videoContainer:  {
    border: '1px solid #fff',
    width: '500px',
    height: '250px',
    borderColor: 'black',
    textAlign: 'center',
    marginTop: '50px'

  }
});

export default function WorkoutContainer() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);
  const [playing, setPlaying] = useState(false);
  const HEIGHT = 500;
  const WIDTH = 750;

  const startVideo = () => {
    setPlaying(true)


  }

  
  const stopVideo = () => {
    

  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.tagline}>
      Mastery: Progress for mastering the exercise 
      </div>
      <LinearProgressWithLabel value={progress} color='secondary' />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <div></div>
          <video className={classes.videoContainer}>

          </video>
          
        </Grid>
        <Grid item md={6}>
          
            <video
            className={classes.videoContainer}
            height={HEIGHT}
            width={WIDTH}>

            </video>
            <div> 
              {playing ? (
              <button onCLick={stopVideo}>Stop</button>
              ) : (
              <button onCLick={startVideo}> Start</button>)}
            </div>
        </Grid>
      </Grid>
    </div>
  );
}