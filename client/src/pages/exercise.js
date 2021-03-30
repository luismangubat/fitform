import Tab from '../components/tab';
import React from 'react'
import Navbar from '../components/navbar'
import Exercise from '../components/exercise/exercises';

const ExercisePage = () => {
  return (
    <div>
      <Navbar/>
      <Tab
      tabName="exercise"
      tab1={<Exercise/>}/>
      
    </div>
  )
}

export default ExercisePage;
