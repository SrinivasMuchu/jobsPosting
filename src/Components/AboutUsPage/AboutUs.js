import highlightsStyles from './AboutUsHighlights.module.css';
import React from 'react';
import Image from 'next/image';
import styles from './AboutUs.module.css';
import Topnav from '../TopNav/Topnav';
import Footer from '../Footer/Footer';


function AboutUs() {
  return (
    <>
    <Topnav/>
      <h1 className={styles.aboutUsTitle}>About Us</h1>
      <div className={styles.aboutUsContainer}>
        <Image
          src="/about-us.png"
          alt="About Rolvary"
          width={340}
          height={220}
          className={styles.aboutUsImage}
          priority
        />
      
        <div className={styles.aboutUsContent}>
    Welcome to Rolvary, the innovative job listing platform where &quot;Role Varies&quot; is more than just a name&mdash;it&apos;s our core belief. At Rolvary, we understand that careers are dynamic and evolving. Roles change and grow as individuals develop their skills and discover new paths.<br /><br />
    Our mission is to connect job seekers and employers in an environment that embraces change and opportunity. Whether you&apos;re exploring new career options or looking to hire adaptable talent, Rolvary is your trusted partner in the journey of professional growth.<br /><br />
    We provide a comprehensive and user-friendly platform to discover diverse job roles, supporting the ever-changing nature of careers. With Rolvary, finding your dream job or the perfect candidate has never been easier.<br /><br />
    Join us as we redefine the way roles vary and careers unfold.
        </div>
      </div>
      <h1 className={styles.aboutUsTitle}>Problem Statement</h1>
      <div className={styles.aboutUsContainer}>
       
      
        <div className={styles.aboutUsContent}>
          The modern job market is rapidly evolving, with roles
           and required skills continuously shifting due to technological 
           advancements, automation, and changing business needs. Many job 
           seekers struggle to keep up with these changes, and employers often 
           face difficulty finding candidates who match their dynamic role 
           requirements. Rolvary aims to bridge this gap by recognizing that 
           roles vary and providing a platform where job listings and career 
           paths adapt to the changing demands of the workforce.
        </div>
         <Image
          src="/problem-statement.png"
          alt="problem statement Rolvary"
          width={340}
          height={220}
          className={styles.aboutUsImage}
          priority
        />
      </div>
      {/* Highlights Section */}
       <h1 className={styles.aboutUsTitle}>Value Proposition</h1>
      <div className={styles.aboutUsContainer}>
        <Image
          src="/value-proposition.png"
          alt="Value Proposition Rolvary"
          width={340}
          height={220}
          className={styles.aboutUsImage}
          priority
        />
      
        <div className={styles.aboutUsContent}>
          Rolvary offers a unique job listing experience that embraces the 
          fluidity of modern careers. For job seekers, it means access to 
          diverse opportunities that match their evolving skills and aspirations.
           For employers, it offers a way to connect with talent that is flexible 
           and ready for changing roles, fostering better matches and more 
           sustainable career growth. Rolvary supports career development by 
           highlighting roles that accommodate change, 
          helping users thrive in an unstable job landscape.
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;