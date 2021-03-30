import React from 'react'
import Navbar from '../components/navbar';
import Tab from '../components/tab';
import WorkoutContainer from '../components/workout/workoutContainer';

const Workout = () => {
  
  return (
    <div>
      <Navbar/>
      <Tab
      tabName='Workout'
      tab1={<WorkoutContainer/>}/>
      
    </div>
  )
}

export default Workout;
