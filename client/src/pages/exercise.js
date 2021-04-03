import Tab from '../components/tab';
import React from 'react';
import Navbar from '../components/navbar';
import Search from '../components/exercise/search';

const ExercisePage = () => {
  return (
    <div>
      <Navbar />
      <Tab tabName='exercise' tab1={<Search />} />
    </div>
  );
};

export default ExercisePage;
