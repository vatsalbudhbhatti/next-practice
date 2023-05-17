import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.css';
import video1 from './videos/1.mp4';
import video2 from './videos/2.mp4';
import video3 from './videos/3.mp4';
import video4 from './videos/4.mp4';

const videoArray = [video1, video3, video4, video2];

const VideoBackground = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen(m => !m);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slideVideo = (idx: number) => () => {
    setActiveIndex(idx);
  };

  return (
    <>
      <div>
        <Head>Video background</Head>
        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' />
      </div>
      <header className={styles.header}>
        <Link href="#" className={styles.brand}>Travel</Link>
        <div
          className={cn(styles.menuBtn, { [styles.active]: isMenuOpen })}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        />
        <div className={cn(styles.navigation, { [styles.active]: isMenuOpen })}>
          <div className={styles.navigationItems}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/drums">Drums</Link>
          </div>
        </div>
      </header>
      <section className={styles.home}>
        {videoArray.map((video: string, idx: number) => (
          <video
            key={idx}
            className={cn(styles.videoSlider, { [styles.active]: activeIndex === idx })}
            src={video}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        ))}
        <div className={styles.content}>
          <h1>Wonderful<br /><span className={styles.subTitle}>Island</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link href="#">Read more</Link>
        </div>
        <div className={styles.mediaIcons}>
          <Link href="#"><i className='fab fa-facebook-f' /></Link>
          <Link href="#"><i className='fab fa-instagram' /></Link>
          <Link href="#"><i className='fab fa-twitter' /></Link>
        </div>
        <div className={styles.sliderNavigation}>
          {videoArray.map((_, i: number) => (
            <div
              key={i}
              className={cn(styles.navBtn, { [styles.active]: activeIndex === i })}
              onClick={slideVideo(i)}
              onKeyDown={slideVideo(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default VideoBackground;
