import React from 'react';
import styles from './exercises.module.css';
import Workout from '../../assets/workout.png';
import Curl from '../../assets/curl.png';
import Plank from '../../assets/plank.png';
import Climber from '../../assets/climber.png';
import Row from '../../assets/row.png';
import Bench from '../../assets/bench.png';
import Squat from '../../assets/squat.png';
import Pullup from '../../assets/pullup.png';

const exercise = () => {
  return (
    <div className={styles.Container}>
      <a href='/workout'>
        <div className={styles.Exercise}>
          <h2 style={{}}>Tricep Dips</h2>
          <img src={Workout} alt='' />
        </div>
      </a>
      <div className={styles.Exercise}>
        <h2 style={{}}>Dumbbell Curls</h2>
        <img src={Curl} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Plank Sidewalk</h2>
        <img src={Plank} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Mountain Climbers</h2>
        <img src={Climber} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Barbell Row</h2>
        <img src={Row} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Bench Press</h2>
        <img src={Bench} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Barbell Squat</h2>
        <img src={Squat} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Pull-Up</h2>
        <img src={Pullup} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Dumbbell Curls</h2>
        <img src={Workout} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Dumbbell Curls</h2>
        <img src={Workout} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Dumbbell Curls</h2>
        <img src={Workout} alt='' />
      </div>
      <div className={styles.Exercise}>
        <h2 style={{}}>Dumbbell Curls</h2>
        <img src={Workout} alt='' />
      </div>
    </div>
  );
};

export default exercise;
