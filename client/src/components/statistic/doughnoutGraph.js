import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from "react-chartjs-2";
import Box from '@material-ui/core/Box';
import Chart from "chart.js";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({

  doughnutContainer: {
    width: '350px',
    height: '350px',
    filter: 'drop-shadow(0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32)), drop-shadow(0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32))',
    borderRadius: '9px',
    borderColor: 'black',
    background: '#FDFDFD',
    marginBottom: '50px',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '40px'
   
  },

  doughnutTitle: { 
    textAlign: 'left',
    paddingLeft: '10px',
    paddingBottom: '50px'
  },
  metricContainainer: {
    height: '155px',
    width: '350px',
    marginBottom: '30px',
    textAlign: 'center',
    lineHeight: '160px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#607D8B',
    borderRadius: '9px',
    


  }, 

  boxcContainer: {
    height: '160px',
    width: '160px',    
    textAlign: 'center',
    lineHeight: '175px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#263238',
    borderRadius: '9px',


  },  

  boxcContainer2: {
    height: '160px',
    width: '160px',    
    textAlign: 'center',
    lineHeight: '175px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#263238',
    borderRadius: '9px',
    marginBottom: '30px'


  },  


  rightBoxcContainer: {
    height: '160px',
    width: '160px',
    marginLeft: '20px',
    textAlign: 'center',
    lineHeight: '175px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#263238',
    borderRadius: '9px',

  }, 

  rightBoxcContainer2: {
    height: '160px',
    width: '160px',
    marginLeft: '20px',
    textAlign: 'center',
    lineHeight: '175px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#263238',
    borderRadius: '9px',
    marginBottom: '30px'

  }, 
  metricDescription: {
    fontSize: '12px',
    textAlign: 'left',
    marginRight: '40px',
    bottom: '0',
    marginLeft: '5px',
    paddingBottom: '10px',
    color: '#607D8B',
    fontWeight: '600'
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
  },

  outerContainer: {
   
    justifyContent: 'center',
    display: 'flex',
 
  },

  gridContainer: {
    paddingBottom: '60px'
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
    <Grid container spacing={0} alignItems={'center'} className={classes.gridContainer}>
      <Grid item sm={12} lg={4}>
        <div className={classes.container}>
          <Box  boxShadow={1} className={classes.doughnutContainer}>
            <div className={classes.doughnutTitle}>
            <Typography>
              Workout Complete
            </Typography>
            <Typography>
              Leg Day 
            </Typography>
            </div>
            <Doughnut data={data}/>
          </Box>
        </div>
      </Grid>

      <Grid item sm={12} lg={4}>
        <div className={classes.outerContainer}>
          <Box  boxShadow={1} className={classes.metricContainainer}>
            <div className={classes.metric2}> 340 </div>
            <div className={classes.metricDescription}> Total Reps Overall</div>
          </Box>
        </div>

          <div className={classes.outerContainer}>
              <Box  boxShadow={1} className={classes.boxcContainer}>
                <div className={classes.metric}> 25</div>
                <div className={classes.metricDescription}> Total Squat</div>
              </Box>
              <Box  boxShadow={1} className={classes.rightBoxcContainer}>
                <div className={classes.metric}> 25</div>
                <div className={classes.metricDescription}> Total Pushups</div>
              </Box>
     
          </div>   
      </Grid>  

      <Grid item sm={12} lg={4}>
          <div className={classes.outerContainer}>
              <Box  boxShadow={1} className={classes.boxcContainer2}>
                <div className={classes.metric}> 70</div>
                <div className={classes.metricDescription}> Total Dips</div>
              </Box>
              <Box  boxShadow={1} className={classes.rightBoxcContainer2}>
                <div className={classes.metric}> 125</div>
                <div className={classes.metricDescription}> Total Situps</div>
              </Box>
    
          </div>   

          <div className={classes.outerContainer}>
              <Box  boxShadow={1} className={classes.boxcContainer2}>
                <div className={classes.metric}> 57 </div>
                <div className={classes.metricDescription}> Total Pullups</div>
              </Box>
              <Box  boxShadow={1} className={classes.rightBoxcContainer2}>
                <div className={classes.metric}> 80 </div>
                <div className={classes.metricDescription}> Total Lunges</div>
              </Box>
          </div>   
        </Grid>
    </Grid>

  )
}

export default DoughnutGraph;
