import React from 'react';
import styles from './About.module.css';


function About() {
  return (
    <div className={styles.aboutContainer}>
      <blockquote className={styles.slogan}>
        <span className={styles.sloganQuoteMark}>&ldquo;</span>
        <span className={styles.sloganText}>One search today, a career tomorrow. Find your dream job now.</span>
        <span className={styles.sloganQuoteMark}>&rdquo;</span>
      </blockquote>
    </div>
  );
}

export default About;