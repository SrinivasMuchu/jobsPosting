"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Topnav.module.css';

function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/name-logo.png" alt="rolvary Logo" width={140} height={40} priority />
      </div>
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#sectors">Sectors</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
      <button className={styles.getStarted}>Get Started</button>
    </nav>
  );
}

export default Topnav;