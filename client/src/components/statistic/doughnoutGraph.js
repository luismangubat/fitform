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
    height: '250px',
    filter: 'drop-shadow(0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32)), drop-shadow(0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32))',
    borderRadius: '9px',
    borderColor: 'black',
    background: '#FDFDFD',
    margin: '0px',
    marginBottom: '50px',
    marginRight: '0px'
  },

  metricContainainer: {
    height: '125px',
    width: '350px'
  }, 

  metricContainer: {

  }
})


// Add innner Text to Doughnut Graph
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
    <Grid container spacing={0}>
      <Grid item xs={3}>
      <Box  boxShadow={1} className={classes.doughnutContainer}>
        <Typography>
          Workout Complete
        </Typography>
        <Typography>
          Leg Day 
        </Typography>
        <Doughnut data={data}/>
      </Box>
      </Grid>
      <Grid item xs={9}>
      <Box  boxShadow={1} className={classes.metricContainainer}>
         Metric 1
      </Box>
      <Box  boxShadow={1} className={classes.metricContainainer}>
         Metric 2
      </Box>
      </Grid>
    </Grid>
  )
}

export default DoughnutGraph;
