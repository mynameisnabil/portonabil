import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socials}>
          <a href="https://api.whatsapp.com/send/?phone=62895358522968&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src="/assets/whatsapp-white.png" alt="WhatsApp" className={styles.socialIcon} />
          </a>
          <a href="https://www.linkedin.com/in/nabil-izzaturrahman/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src="/assets/linkedin-whit.png" alt="LinkedIn" className={styles.socialIcon} />
          </a>
          <a href="https://github.com/mynameisnabil" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src="/assets/github-white.png" alt="GitHub" className={styles.socialIcon} />
          </a>
          <a href="https://medium.com/@mynameisnabil09" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src="/assets/medium-white.png" alt="Medium" className={styles.socialIcon} />
          </a>
        </div>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Nabil Izzaturrahman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
