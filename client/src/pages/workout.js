import React from 'react'
import Navbar from '../components/navbar';
import Tab from '../components/tab2';
import WorkoutContainer from '../components/workout/workoutContainer';
import Preview from '../components/workout/preview';
const Workout = () => {
  
  return (
    <div>
      <Navbar/>
      <Tab
      label1='Workout'
      Tab1={<WorkoutContainer/>}
      label2="Record"
      Tab2={<Preview/>}/>
      
    </div>
  )
}

export default Workout;
