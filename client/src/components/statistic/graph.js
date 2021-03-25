import React from 'react'
import {Line} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  Graph: {
    // Change this later
    height: '700px'
  }

})

const state = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Tricep",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(222,73,34,0.2)",
      borderColor: "#DE4922"
    },
    {
      label: "Bicep",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#CFD8DC"
    }
  ],

};


const Graph = () => {

  const classes = useStyles()
  return (
    <div className={classes.Graph}>
       <Line
          data={state}
          height={'100%'}
          options={{
            title:{
              display:true,
              text:'Weekly ',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
  )
}

export default Graph;