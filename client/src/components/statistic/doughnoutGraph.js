import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from "react-chartjs-2";
import Box from '@material-ui/core/Box';
import Chart from "chart.js";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({

  doughnutContainer: {
    width: '300px',
    height: '250px',
    filter: 'drop-shadow(0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32)), drop-shadow(0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32))',
    borderRadius: '9px',
    borderColor: 'black',
    background: '#FDFDFD',
    marginBottom: '50px',
    textAlign: 'center'
   
  },

  metricContainainer: {
    height: '115px',
    width: '350px',
    marginBottom: '10px',
    textAlign: 'center',
    lineHeight: '90px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#263238',
    borderRadius: '9px',


  }, 

  boxcContainer: {
    height: '125px',
    width: '165px',    
    textAlign: 'center',
    lineHeight: '110px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#263238',
    borderRadius: '9px',


  },  

  rightBoxcContainer: {
    height: '125px',
    width: '165px',
    marginLeft: '20px',
    textAlign: 'center',
    lineHeight: '110px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#263238',
    borderRadius: '9px',

  }, 
  metricDescription: {
    fontSize: '12px',
    textAlign: 'left',
    marginRight: '40px',
    bottom: '0',
    marginLeft: '5px',
    paddingBottom: '10px'
  },
  metric: {
    height: '20px',
    width: '165px',
    paddingBottom: '35px',
    color: '#263238'
  
  },

  metric2: {
    height: '20px',
    width: '350px',
    paddingBottom: '35px',
    color: '#263238'
  
  },

  container: {
   
    display: 'flex',
    justifyContent: 'center'
  }

})


// Add inner Text to Doughnut Graph
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
  
    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.9 ;

    ctx.fillText(text, textX, textY);
  }
});


const data = {
  maintainAspectRatio: false,
  responsive: false,
  datasets: [
    {
      data: [100, 300],
      backgroundColor: [ '#DE4922', '#CFD8DC'],
      hoverBackgroundColor: [ '#DE4922', '#CFD8DC']
    }
  ], 
  text: '25%'
};


const DoughnutGraph = () => {

  const classes = useStyles()
  return (
    <Grid container spacing={0} alignItems={'center'} >
      <Grid item xs={12} md={4}>
        <div className={classes.container}>
          <Box  boxShadow={1} className={classes.doughnutContainer}>
            <Typography>
              Workout Complete
            </Typography>
            <Typography>
              Leg Day 
            </Typography>
            <Doughnut data={data}/>
          </Box>
        </div>
      </Grid>
      <Grid item xs={12} md={4} spacing={0} >
        <div className={classes.container}>
        <Box  boxShadow={1} className={classes.metricContainainer}>
        <div className={classes.metric2}> 340 </div>
        <div className={classes.metricDescription}> Total Reps Overall</div>
        </Box>
        </div>
        <Grid container>
        <div className={classes.container}>
          <Grid item >
              <Box  boxShadow={1} className={classes.boxcContainer}>
              <div className={classes.metric}> 25</div>
              <div className={classes.metricDescription}> Total Squat</div>
              </Box>
          </Grid>
          <Grid item >
              <Box  boxShadow={1} className={classes.rightBoxcContainer}>
                <div className={classes.metric}> 25</div>
                <div className={classes.metricDescription}> Total Squat</div>
              </Box>
             
          </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} spacing={2}>
          
      <Grid container>
        <div className={classes.container}>
            <Grid item >
                <Box  boxShadow={1} className={classes.boxcContainer}>
                <div className={classes.metric}> 123</div>
                  <div className={classes.metricDescription}> Total Situps</div>
                </Box>
            </Grid>
            <Grid item >
                <Box  boxShadow={1} className={classes.rightBoxcContainer}>
                <div className={classes.metric}> 25</div>
                  <div className={classes.metricDescription}> Total Dips</div>
                </Box>
            </Grid>
            </div>
          </Grid>

          <Grid container>
          <div className={classes.container}>
            <Grid item >
                <Box  boxShadow={1} className={classes.boxcContainer}>
                <div className={classes.metric}> 25</div>
                  <div className={classes.metricDescription}> Total Situps</div>
                </Box>
            </Grid>
            <Grid item >
                <Box  boxShadow={1} className={classes.rightBoxcContainer}>
                <div className={classes.metric}> 25</div>
                  <div className={classes.metricDescription}> Total Duration Planks</div>
                </Box>
            </Grid>
            </div>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default DoughnutGraph;
