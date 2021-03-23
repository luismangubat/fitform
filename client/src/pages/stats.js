import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hero from '../components/stats-hero';
import LineChart from '../components/linechart';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100',
  },
  appbar: {
    position: 'static'
  },

}));

const Stats = () => {

  const classes = useStyles();

  return(
    <div>
      <div>
        <Hero/>
        <LineChart/>
      </div>
    </div>
  )
}

export default Stats; 