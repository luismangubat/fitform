import React from 'react'
import Navbar from '../components/navbar';
import Tab from '../components/tab';
import ProgressBar from '../components/workout/progressBar';
import workoutContainer  from '../components/workout/workoutContainer';
const Workout = () => {
  return (
    <div>
      <Navbar/>
      <Tab
      tab1={<ProgressBar/>}/>
      
    </div>
  )
}

export default Workout;
