import React from 'react';
import styles from './OurServices.module.css';

function OurServices() {
  return (
    <section className={styles.servicesSection} id='services'>
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesSubtitle}>
        Comprehensive tools for career exploration and planning
      </div>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceCardTitle}>
            <span role="img" aria-label="path">🗺️</span> Career Path Mapping
          </div>
          <div className={styles.serviceCardDesc}>
            Visualized pathways from entry-level roles to leadership positions across all major industries.
          </div>
          <div className={styles.serviceCardNote}>
            Helps students and professionals see where they are now and where they can go next.
          </div>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceCardTitle}>
            <span role="img" aria-label="education">🎓</span> Education & Skills Alignment
          </div>
          <div className={styles.serviceCardDesc}>
            Clear mapping of degrees, certifications, and skills to relevant roles.
          </div>
          <div className={styles.serviceCardNote}>
            Bridges the gap between what you studied and where it leads.
          </div>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceCardTitle}>
            <span role="img" aria-label="sector">🧭</span> Sector-Wise Exploration
          </div>
          <div className={styles.serviceCardDesc}>
            Filters by Category → Sector → Sub-discipline → Role for personalized discovery.
          </div>
          <div className={styles.serviceCardNote}>
            Sector guides that simplify complex industries.
          </div>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceCardTitle}>
            <span role="img" aria-label="insights">🧠</span> Personalized Career Insights
          </div>
          <div className={styles.serviceCardDesc}>
            AI-driven search that connects skills, passions, and opportunities.
          </div>
          <div className={styles.serviceCardNote}>
            Tailored suggestions for freshers, professionals, and career advisors.
          </div>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceCardTitle}>
            <span role="img" aria-label="data">🗂️</span> Data & Export Tools
          </div>
          <div className={styles.serviceCardDesc}>
            Interactive table view with sort, filter, and keyword search capabilities.
          </div>
          <div className={styles.serviceCardNote}>
            CSV export option for advisors and institutions.
          </div>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceCardTitle}>
            <span role="img" aria-label="future">🚀</span> Future-Ready Guidance
          </div>
          <div className={styles.serviceCardDesc}>
            Keeps up with emerging roles, technologies, and industries.
          </div>
          <div className={styles.serviceCardNote}>
            Plan not just for today but for the careers of tomorrow.
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;