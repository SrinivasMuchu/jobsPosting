
import styles from './WhatAbout.module.css';

function WhatAbout() {
	return (
		<section className={styles.whatAboutSection}>
			<div className={styles.whatAboutLeft}>
				<h2 className={styles.whatAboutTitle}>What is konnect?</h2>
				<p className={styles.whatAboutDesc}>
					The konnect is a comprehensive tool that brings together career paths from diverse fields such as Arts, Business, Commerce, Education, Engineering, Finance, Healthcare, Humanities, and Law.
				</p>
				<p className={styles.whatAboutDesc}>
					Designed for students, professionals, and career advisors, it allows users to filter by category, sector, sub-discipline, and role while exploring essential details like skills, education backgrounds, industries, and career progression.
				</p>
				<p className={styles.whatAboutDesc}>
					With its clean, interactive interface, the platform simplifies career planning, skill mapping, and future growth exploration.
				</p>
			</div>
			<div className={styles.whatAboutRight}>
				<img
					src="/career-visualization.png"
					alt="Career Path Visualization"
					className={styles.visualizationImg}
				/>
			</div>
		</section>
	);
}

export default WhatAbout;
