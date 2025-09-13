import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer} id='about'>
      <h1 className={styles.aboutTitle}>
        <span className={styles.textHighlight}>About Rolvary</span>
      </h1>
      <p className={styles.aboutDesc}>
        <span className={styles.textHighlight}>
          A comprehensive career exploration platform that connects your skills, education, and passions to real opportunities across diverse industries.
        </span>
      </p>
    </div>
  );
}

export default About;