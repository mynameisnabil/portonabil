import React from 'react';
import styles from './About.module.css';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Flutter', 'Mobile Development', 'Dart', 'Kotlin', 'Android Development', 
    'XML Layout', 'Node.JS', 'JavaScript', 'EJS', 'PHP', 'Java', 'API', 
    'Web Development', 'Firebase', 'SQL lite', 'SQL', 'Room Database', 
    'Retrofit', 'Object-oriented-programming (OOP)', 'MVP design pattern', 
    'Testing/Debugging Android', 'GIT', 'HTML', 'CSS', 'Unity', 'C#'
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className={styles.headingSm}>About 🦄</span>
          <span className={styles.headingMain}>
            Here you will find more information about me, what I do, and list of my current skills in programming
          </span>
        </h2>
        
        <div className={styles.content}>
          <div className={styles.mainInfo}>
            <h3 className="heading-tertiary">My Story</h3>
            <div className="text-primary">
              <p>
                I'm Nabil Izzaturrahman, a Computer Science graduate from Bina Nusantara University with a specialization in Mobile Applications and Technology. I have hands-on experience in mobile and backend development, especially using Flutter, Kotlin, Java, Node.js, and JavaScript. I am currently waiting for my graduation ceremony, while actively seeking opportunities.
              </p>
              <br />
              <p>
                During my one-year internship at Polytron Indonesia (February 2024 – February 2025), I contributed to the development of the MyPolytron app (Flutter), handled API integration (Node.js), and created an Android app for QR/barcode scanning. I also worked on internal websites using JavaScript, Node.js, CodeIgniter, EJS, and Bootstrap — all within Agile practices.
              </p>
              <br />
              <p>
                Currently based in Jeddah for a short academic program at King Abdulaziz University, I'm open to remote opportunities as well as onsite as a Mobile or Backend Developer in Indonesia or Saudi Arabia.
              </p>
            </div>
            
            <a href="./assets/CV_Nabil_Izzaturrahman_Update.pdf" download className="btn btn-primary" style={{ marginTop: '1rem' }}>
              <Download size={18} /> Download CV
            </a>
          </div>
          
          <div className={styles.skillsInfo}>
            <h3 className="heading-tertiary">My Skills</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
