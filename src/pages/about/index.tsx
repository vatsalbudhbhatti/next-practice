import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.navbar}>
          <span className={styles.logo}>Samarth Ayurved</span>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='#'>Store</Link></li>
            <li><Link href='#'>About</Link></li>
          </ul>
        </div>
        <div className={styles.content}>
          <h1>FEEL THE LIFE</h1>
          <p>Be free from the disease and become more healthy with nature and natural treatment.<br />Welcome to the <b>Samarth Ayurved Panchkarma Hospital.</b></p>
          <div>
            <button type="button" className={styles.button}>
              <span className={styles.span} />
              Join
            </button>
            <button type="button" className={styles.button} onClick={() => router.push('/video-background')}>
              <span className={styles.span} />
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
