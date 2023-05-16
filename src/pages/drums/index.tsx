import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Audio1 from './audios/1.wav';
import Audio2 from './audios/2.wav';
import Audio3 from './audios/3.wav';
import Audio4 from './audios/4.wav';
import Audio5 from './audios/5.wav';
import Audio6 from './audios/6.wav';
import Audio7 from './audios/7.wav';
import Audio8 from './audios/8.wav';
import Audio9 from './audios/9.wav';
import { useRouter } from 'next/router';

const keys = [
  { key: 'A', code: '65', audio: Audio1 },
  { key: 'S', code: '83', audio: Audio2 },
  { key: 'D', code: '68', audio: Audio3 },
  { key: 'F', code: '70', audio: Audio4 },
  { key: 'G', code: '71', audio: Audio5 },
  { key: 'H', code: '72', audio: Audio6 },
  { key: 'J', code: '74', audio: Audio7 },
  { key: 'K', code: '75', audio: Audio8 },
  { key: 'L', code: '76', audio: Audio9 },
];

const Drums = () => {
  const router = useRouter();
  useEffect(() => {
    window.addEventListener('keydown', (e: any) => {
      const audio: any = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key: any = document.querySelector(`.${styles.key}[data-key="${e.keyCode}"]`);
      if (!audio) return;

      audio.currentTime = 0;
      audio.play();
      key.classList.add(styles.playing);
    });

    const removeTransition = (key: any) => (e: any) => {
      if (e.propertyName !== 'transform') return;
      key.classList.remove(styles.playing);
    };

    const keys: any = document.querySelectorAll(`.${styles.key}`);
    keys.forEach((key: any) => key.addEventListener('transitionend', removeTransition(key)));

  }, []);

  return (
    <div className={styles.banner}>
      <span className={styles.back} onClick={() => router.back()}>Back</span>
      <div className={styles.keys}>
        {keys.map((k: { key: string, code: string; }) => (
          <div className={styles.key} data-key={k.code} key={k.code}>
            <kbd className={styles.kbd}>{k.key}</kbd>
          </div>
        ))}
      </div>
      {keys.map((k: { key: string, code: string, audio: string; }) => (
        <audio key={k.code} data-key={k.code} src={k.audio} />
      ))}
    </div>
  );
};

export default Drums;
