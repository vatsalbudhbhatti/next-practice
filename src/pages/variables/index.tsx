import React, { useEffect } from 'react';
import luffy from '../about/images/luffy.jpg';
import styles from './styles.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Variables: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const inputs = document.querySelectorAll(`.${styles.controls} input`);

    const handleChange = (input: any) => () => {
      console.log(input.dataset.sizing, input.name, input.value);
      const suffix = input?.dataset?.sizing || '';
      document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
    };

    inputs.forEach((input) => input.addEventListener('change', handleChange(input)));
    inputs.forEach((input) => input.addEventListener('mousemove', handleChange(input)));
  }, []);

  return (
    <div className={styles.body}>
      <span className={styles.back} onClick={() => router.back()}>Back</span>
      <h2>Update CSS variables and <span className={styles.hl}>JS</span></h2>
      <div className={styles.controls}>
        <label htmlFor="spacing">Spacing:</label>
        <input type='range' name='spacing' min={20} max={200} defaultValue={20} data-sizing="px" />

        <label htmlFor='blur'>Blur:</label>
        <input type='range' name='blur' min={0} max={25} defaultValue={10} data-sizing="px" />

        <label htmlFor='base'>Base color:</label>
        <input type='color' name="base" defaultValue="#ffc600" />
      </div>
      <Image src={luffy} alt="luffy" width={500} height={500} className={styles.img} />
    </div>
  );
};

export default Variables;
