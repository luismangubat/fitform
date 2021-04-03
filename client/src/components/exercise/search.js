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
import Skull from '../../assets/skull.png';
import Reverse from '../../assets/reverse.png';
import Pushup from '../../assets/pushup.png';
import Shoulder from '../../assets/shoulder.png';

const search = () => {
  return (
    <div className={styles.Centred}>
      <div className={styles.Container}>
        <a href='/workout'>
          <div className={styles.Exercise}>
            <h2>Tricep Dips</h2>
            <img src={Workout} alt='' />
          </div>
        </a>
        <div className={styles.Exercise}>
          <h2>Barbell Squat</h2>
          <img src={Squat} alt='' />
        </div>
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
          <h2 style={{}}>Pull-Up</h2>
          <img src={Pullup} alt='' />
        </div>
        <div className={styles.Exercise}>
          <h2 style={{}}>Reverse Crunch</h2>
          <img src={Reverse} alt='' />
        </div>
        <div className={styles.Exercise}>
          <h2 style={{}}>Dumbbell Shoulder Press</h2>
          <img src={Shoulder} alt='' />
        </div>
        <div className={styles.Exercise}>
          <h2 style={{}}>Push-ups</h2>
          <img src={Pushup} alt='' />
        </div>
        <div className={styles.Exercise}>
          <h2 style={{}}>Skull Crushers</h2>
          <img src={Skull} alt='' />
        </div>
      </div>
    </div>
  );
};

export default search;
