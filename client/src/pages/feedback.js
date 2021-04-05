import Tab from '../components/tab';
import React from 'react';
import Navbar from '../components/navbar';
import FeedbackInfo from '../components/workout/feedbackinfo';

const Feedback = () => {
  return (
    <div>
      <Navbar />
      <Tab tabName='Feedback' tab1={<FeedbackInfo />} />
    </div>
  );
};

export default Feedback;
