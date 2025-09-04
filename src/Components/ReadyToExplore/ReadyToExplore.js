
import styles from './ReadyToExplore.module.css';

function ReadyToExplore() {
	return (
		<section className={styles.exploreSection}>
			<div className={styles.exploreTitle}>Ready to Explore Your Career Path?</div>
			<div className={styles.exploreSubtitle}>
				Join thousands of students, professionals, and advisors who are already using konnect<br />
				to navigate their career journeys.
			</div>
			<div className={styles.exploreActions}>
				<button className={styles.exploreBtn}>Start Exploring</button>
				<button className={`${styles.exploreBtn} ${styles.exploreBtnSecondary}`}>Learn More</button>
			</div>
		</section>
	);
}

export default ReadyToExplore;
