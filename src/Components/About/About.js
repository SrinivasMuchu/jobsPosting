import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer} id='about'>
      <h1 className={styles.aboutTitle}>About konnect</h1>
      <p className={styles.aboutDesc}>
        A comprehensive career exploration platform that connects your skills, education, and passions to real opportunities across diverse industries.
      </p>
    </div>
  );
}

export default About;