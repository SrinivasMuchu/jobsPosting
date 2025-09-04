import React from 'react';
import styles from './WhyUs.module.css';

function WhyUs() {
  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.whyUsTitle}>Why konnect?</h2>
      <div className={styles.whyUsSubtitle}>
        Choosing the right career today is harder than ever. We're here to change that.
      </div>
      <div className={styles.whyUsGrid}>
        <div className={styles.whyUsCard}>
          <div className={styles.whyUsCardTitle}>
            <span role="img" aria-label="problem">⚠️</span> The Problem
          </div>
          <ul>
            <li>Job boards only show vacancies</li>
            <li>Degrees don't translate into clear opportunities</li>
            <li>Professionals feel lost switching industries</li>
            <li>Students struggle with "What's the right path?"</li>
          </ul>
        </div>
        <div className={styles.whyUsCard}>
          <div className={styles.whyUsCardTitle}>
            <span role="img" aria-label="solution">💡</span> Our Solution
          </div>
          <ul>
            <li>Show the bigger picture beyond job listings</li>
            <li>Connect skills, education, and passions to real roles</li>
            <li>Personalized clarity with sector-wise filters</li>
            <li>Mapped career paths for clear direction</li>
          </ul>
        </div>
      </div>
      <div className={styles.whyUsHighlight}>
        <div className={styles.whyUsHighlightTitle}>
          We're not just about finding a job
        </div>
        <div className={styles.whyUsHighlightDesc}>
          We're about helping you understand where you belong, what skills you need, and where your future can take you.
        </div>
      </div>
    </section>
  );
}

export default WhyUs;