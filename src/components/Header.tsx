import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certif' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} glass`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImageContainer}>
            <img src="./assets/nabil.png" alt="Nabil Izzaturrahman" className={styles.logoImg} />
          </div>
          <span className={styles.logoText}>Nabil Izzaturrahman</span>
        </div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.navLink}>{link.name}</a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className={styles.mobileActions}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
