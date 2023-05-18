import React, { useEffect } from 'react';
import styles from './styles.module.css';
import cn from 'classnames';
import { useRouter } from 'next/router';

const Clock = () => {
  const router = useRouter();

  useEffect(
    () => {
      const secondHand: any = document.querySelector('.secondHand');
      const minHand: any = document.querySelector('.minHand');
      const hourHand: any = document.querySelector('.hourHand');

      const setDate = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const secDeg = ((seconds / 60) * 360) + 90;
        const minDeg = ((minutes / 60) * 360) + 90;
        const hourDeg = ((hours / 12) * 360) + 90;
        secondHand.style.transform = `rotate(${secDeg}deg)`;
        minHand.style.transform = `rotate(${minDeg}deg)`;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
      };
      const timer = setInterval(setDate, 1000);
      return () => {
        if (timer) {
          clearInterval(timer);
        }
      };
    },
    [],
  );

  return (
    <div className={styles.html}>
      <div className={styles.body}>
        <span className={styles.back} onClick={() => router.back()}>Back</span>
        <div className={styles.clock}>
          <div className={styles.clockFace}>
            <div className={cn(styles.hand, 'hourHand')} />
            <div className={cn(styles.hand, 'minHand')} />
            <div className={cn(styles.hand, 'secondHand')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
