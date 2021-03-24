import React from 'react'
import Tabs from '../components/tabs';
import Navbar from '../components/navbar';
import Stats from '../components/statistic/statistic';


const StatsPage = () => {
  return (
    <div>
      <Navbar/>
      <Tabs
      Stats={<Stats/>}
      />
      
    </div>
  )
}

export default StatsPage;