
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footerSection} id='contact'>
			<div className={styles.footerContent}>
				<div className={styles.footerCol}>
					<div className={styles.footerLogo}>Rolvary</div>
					<div className={styles.footerDesc}>
						Your comprehensive career exploration platform for the future of work.
					</div>
				</div>
				<div className={styles.footerCol}>
					<div className={styles.footerColTitle}>Platform</div>
					<a href="#" className={styles.footerLink}>Career Explorer</a>
					<a href="#" className={styles.footerLink}>Skill Mapping</a>
					<a href="#" className={styles.footerLink}>Path Planning</a>
				</div>
				<div className={styles.footerCol}>
					<div className={styles.footerColTitle}>Resources</div>
					<a href="#" className={styles.footerLink}>Documentation</a>
					<a href="#" className={styles.footerLink}>Guides</a>
					<a href="#" className={styles.footerLink}>Support</a>
				</div>
				<div className={styles.footerCol}>
					<div className={styles.footerColTitle}>Company</div>
					<a href="#" className={styles.footerLink}>About</a>
					<a href="#" className={styles.footerLink}>Contact</a>
					<a href="#" className={styles.footerLink}>Privacy</a>
				</div>
			</div>
			<div className={styles.footerBottom}>
				© 2025 Rolvary. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
