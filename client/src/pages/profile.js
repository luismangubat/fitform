import React from 'react';
import Tabs from '../components/tabs';
import Navbar from '../components/navbar';
import Stats from '../components/statistic/statistic';
import Recording from '../components/exercise/recordings';
import Exercise from '../components/exercise/exercises';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Tabs Tab1={<Exercise />} Tab2={<Recording />} Tab3={<Stats />} />
    </div>
  );
};

export default Profile;
