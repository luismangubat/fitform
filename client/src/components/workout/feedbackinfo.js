import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from "react-chartjs-2";
import Box from '@material-ui/core/Box';
import Chart from "chart.js";
import Grid from '@material-ui/core/Grid';
import Recording from '../../assets/recording1.mp4';



const useStyles = makeStyles({

  doughnutContainer: {
    width: '600px',
    height: '350px',
    filter: 'drop-shadow(0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32)), drop-shadow(0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32))',
    borderRadius: '9px',
    borderColor: 'black',
    background: '#FDFDFD',
    marginBottom: '50px',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '40px',
    backdropFilter: 'blur(3px)',
    marginLeft: '120px'
   
  },

  doughnutTitle: { 
    textAlign: 'left',
    paddingLeft: '10px',
    paddingBottom: '0px',
    color: '#263238',
    fontSize: '15px',
  },

  doughtnutDesc: { 
    textAlign: 'left',
    paddingLeft: '10px',
    color: '#263238',
    fontSize: '20px',
  },
  metricContainainer: {
    height: '155px',
    width: '350px',
    marginBottom: '30px',
    textAlign: 'center',
    lineHeight: '160px',
    alignItems: 'center',
    fontSize: '45px',
    color: '#25546B',
    borderRadius: '9px',
    background:'white'
    


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
    background:'white'


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
    marginBottom: '30px',
    background:'white'


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
    background:'white'

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
    marginBottom: '30px',
    background:'white'

  }, 
  metricDescription: {
    fontSize: '14px',
    textAlign: 'left',
    marginRight: '40px',
    bottom: '0',
    marginLeft: '5px',
    paddingBottom: '10px',
    color: '#25546B',
    fontWeight: '600',
    
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
    paddingBottom: '60px',

  },

  videoContainer:  {
    border: '1px solid #fff',
    width: '700px',
    height: '500px',
    borderColor: 'black',
    textAlign: 'center',
    marginTop: '50px',


  },

  gridContainer2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  
  },

  feedbackHeader: {
    marginLeft: '30px'
  },

  textBox: {
    width: '100%',
    background: '#FCFCFC',
    borderRadius: '10px',
    marginTop: '76px',
    height: '150px'
  },

  header: {
    paddingLeft: '15px',
    color: '#1E1E1E'
  },




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
      data: [300, 50],
      backgroundColor: [ '#DE4922', '#CFD8DC'],
      hoverBackgroundColor: [ '#DE4922', '#CFD8DC']
    }
  ], 
  text: '85%'
};


const FeedbackInfo = () => {

  const classes = useStyles()
  return (
    <Grid container spacing={0} alignItems={'center'} className={classes.gridContainer}>

  
      <Grid item lg={4}>
      <div className={classes.gridContainer2}>      
            <div  >
            <video controls  width='650' height='375'>
            <source src={Recording} type='video/mp4' />
                </video>
            </div>
            </div>
      </Grid>



      <Grid item sm={12} lg={4}>
        <div className={classes.container}>
          <Box  boxShadow={3} className={classes.doughnutContainer}>
            <div varian={'h1'}className={classes.doughnutTitle}>
            <Typography className={classes.doughtnutDesc}>
              Accuracy
            </Typography>
            <Typography className={classes.doughtnutDesc}>
              Tricep Dips
            </Typography>
            </div>
            <Doughnut data={data}/>
          </Box>
        </div>
      </Grid>


      <Grid item sm={12} lg={4}>
        <div className={classes.outerContainer}>
          <Box  boxShadow={3} className={classes.metricContainainer}>
            <div className={classes.metric2}> 80% </div>
            <div className={classes.metricDescription}>Elbow Angle Accuracy</div>
          </Box>
        </div>

          <div className={classes.outerContainer}>
              <Box  boxShadow={3} className={classes.boxcContainer}>
                <div className={classes.metric}> 25</div>
                <div className={classes.metricDescription}> Perfect Tricep</div>
              </Box>
              <Box  boxShadow={3} className={classes.rightBoxcContainer}>
                <div className={classes.metric}> 5</div>
                <div className={classes.metricDescription}> Tricep Missed</div>
              </Box>
          </div>   
      </Grid>  

      <Grid item lg={12}>
      <div className={classes.textBox}>
          <h1 className={classes.header}> Overall Feedback</h1>
          <ul>
            <li>Keep your legs straight with just your heels touching the ground.</li>
            <li>Make sure to keep a slow and steady pace on the decline </li>

          </ul>      
        </div>
      </Grid>


    </Grid>

  )
}

export default FeedbackInfo;
