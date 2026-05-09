import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.info}>
          <h1 className="heading-primary">
            <span className={styles.greeting}>Hello 👋</span>
            <span className={styles.mainHeading}>
              I'm Nabil Izzaturrahman, A Software Engineer and Computer Science graduate from Binus University
            </span>
          </h1>
          <div className={styles.ctaGroup}>
            <a href="#projects" className="btn btn-primary">Projects</a>
            <a href="#contact" className="btn btn-outline">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
