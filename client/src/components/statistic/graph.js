import React from 'react'
import {Line} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {  useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles( theme => ({

  Graph: {
    // Change this later
    height: '600px',
    marginBottom: '50px',
    filter: 'dropShadow(0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32)), dropShadow(0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32)',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  spacer: {
    height: '50px',
    bakground: 'white'
  }

}));

const state = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturdat", 'Sunday'],
  datasets: [
    {
      label: "Tricep",
      data: [33, 32, 55, 41, 44, 65, 75],
      fill: true,
      backgroundColor: "rgba(222,73,34,0.2)",
      borderColor: "#DE4922"
    },
    {
      label: "Bicep",
      data: [33, 25, 42, 51, 54, 76, 83],
      fill: false,
      borderColor: "#CFD8DC"
    }
  ],

};


const Graph = () => {

  const classes = useStyles()
  const theme = useTheme();
  const removeGraph = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid >
    <Box className={classes.Graph} >
      { removeGraph &&
      <Box>
       <Line
          data={state}
          height={'100%'}
          options={{
            title:{
              display:true,
              text:'Weekly Performance (Mastery)',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </Box>
      }
    </Box >
    <div className={classes.spacer}></div>
    </Grid>
  
  )
}

export default Graph;