import Tab from '../components/tab';
import React from 'react'
import Navbar from '../components/navbar'
import Preview from '../components/workout/preview';

const Record = () => {
  return (
    <div>
      <Navbar/>
      <Tab
      tabName="Record"
      tab1={<Preview/>}/>
      
    </div>
  )
}

export default Record;
