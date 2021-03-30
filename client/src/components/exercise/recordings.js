import React from 'react';
import styles from './exercises.module.css';
import Recording from '../../assets/recording1.mp4';
import Recording2 from '../../assets/recording2.mp4';

const recordings = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Exercise}>
        <video controls>
          <source src={Recording} type='video/mp4' />
        </video>
      </div>
      <div className={styles.Exercise}>
        <video controls>
          <source src={Recording2} type='video/mp4' />
        </video>
      </div>
      <div className={styles.Exercise}>
        <video controls>
          <source src={Recording} type='video/mp4' />
        </video>
      </div>
      <div className={styles.Exercise}>
        <video controls>
          <source src={Recording} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default recordings;
