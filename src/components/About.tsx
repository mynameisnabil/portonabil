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
                Computer Science graduate from Bina Nusantara University specializing in Mobile Applications and
                Technology, with a strong background in Mobile and Backend development. Experienced in Flutter, Node.js,
                Kotlin, Java, and JavaScript through a one-year software engineering internship. A highly analytical
                professional skilled in optimizing system performance, API efficiency, and large-scale data reconciliation to
                deliver scalable innovations.
              </p>
            </div>

            {/* <a href="./assets/Nabil_CV_Juli_2026.pdf" download className="btn btn-primary" style={{ marginTop: '1rem' }}>
              <Download size={18} /> Download CV
            </a> */}
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
