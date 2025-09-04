
import styles from './SectorCatalog.module.css';

function SectorCatalog() {
	return (
		<section className={styles.sectorSection} id='sectors'>
			<h2 className={styles.sectorTitle}>Sector Catalog</h2>
			<div className={styles.sectorSubtitle}>
				Explore careers across 8 major sectors with detailed sub-disciplines and role mappings
			</div>
			<div className={styles.sectorGrid}>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="arts">🎨</span> Arts & Creative</div>
					<div className={styles.sectorCardDesc}>
						Animation, Graphic Design, Fashion, Film, Performing Arts, Music, Museums, Photography
					</div>
				</div>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="business">💼</span> Business & Commerce</div>
					<div className={styles.sectorCardDesc}>
						Marketing, Sales, Operations, Supply Chain, Retail Management, International Trade
					</div>
				</div>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="education">📚</span> Education</div>
					<div className={styles.sectorCardDesc}>
						Teaching, Curriculum Design, Educational Technology, Academic Leadership
					</div>
				</div>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="engineering">🛠️</span> Engineering & Tech</div>
					<div className={styles.sectorCardDesc}>
						Mechanical, Civil, Electrical, Computer Science, IT, Robotics, Aerospace, AI/ML
					</div>
				</div>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="finance">💲</span> Finance & Banking</div>
					<div className={styles.sectorCardDesc}>
						Investment Banking, Accounting, Auditing, Actuarial Science, Risk Management, FinTech
					</div>
				</div>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="health">🩺</span> Healthcare & Life Sciences</div>
					<div className={styles.sectorCardDesc}>
						Medicine, Nursing, Pharmacy, Biotechnology, Public Health, Research
					</div>
				</div>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="humanities">🌐</span> Humanities & Social Sciences</div>
					<div className={styles.sectorCardDesc}>
						Sociology, Psychology, History, Political Science, Anthropology, Cultural Studies
					</div>
				</div>
				<div className={styles.sectorCard}>
					<div className={styles.sectorCardTitle}><span role="img" aria-label="law">⚖️</span> Law & Legal Studies</div>
					<div className={styles.sectorCardDesc}>
						Corporate Law, Criminal Law, International Law, Intellectual Property, Legal Advisory
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectorCatalog;
