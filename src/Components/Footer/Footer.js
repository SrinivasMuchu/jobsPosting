"use client"
import emailjs from 'emailjs-com';
const sendEmail = (e) => {
	e.preventDefault();
	const form = e.target;
	const email = form.email.value;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert("❌ Please enter a valid email address.");
		return;
	}
	emailjs.sendForm(
		process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,      // ✅ Your Service ID
		process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,     // ✅ Your Template ID
		form,
		process.env.NEXT_PUBLIC_EMAILJS_USER_ID          // ✅ Your Public Key
	).then(
		(result) => {
			alert("✅ Demo request sent! We’ll contact you soon.");
			form.reset();
		},
		(error) => {
			alert("❌ Error: " + error.text);
		}
	);
};

import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footerSection} id='contact'>
			<div className={styles.footerContent}>
				<div className={styles.footerCol}>
					<div className={styles.footerLogo}>Rolvary</div>
					<address className={styles.footerAddress}>
						123 Main Street, Hyderabad, India<br />
						Email: <a href="mailto:mdmohammad8916@gmail.com">mdmohammad8916@gmail.com</a><br />
						Phone: <a href="tel:+916305189099">+91 63051 89099</a><br />
						WhatsApp: <a href="https://wa.me/916305189099?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
					</address>
				</div>
				<div className={styles.footerCol}>
					<form className={styles.footerForm} onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Your Name" required />
						<input type="email" name="email" placeholder="Your Email" required />
						<textarea name="message" placeholder="Your Message" required />
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
			<div className={styles.footerBottom}>
				© 2025 Rolvary. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
