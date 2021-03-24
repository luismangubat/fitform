import React from 'react';
import Hero from './hero';
import Graph from './graph';
import Metrics from './metrics';
// Render All Necessacrt Subcomponent for Stat component here 
const Statistic = () => {
  return (

    <div> 
      <Hero/>
      <Metrics/>
      <Graph/>
    </div>
  )
}

export default Statistic;