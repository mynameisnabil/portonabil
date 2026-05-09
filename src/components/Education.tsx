import React from 'react';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const educationList = [
    {
      school: 'IDN Boarding School',
      location: 'Indonesia',
      degree: 'RPL Vocational Student | 2018 – 2021',
      description: 'Studied mobile development fundamentals, focusing on Java and Kotlin for Android applications.',
      logo: '/assets/idn_logo.png'
    },
    {
      school: 'Binus University',
      location: 'Indonesia',
      degree: 'B.Sc. Computer Science | 2021 – Present (GPA: 3.69)',
      description: 'Major in Computer Science with a specialization in Mobile Applications. Actively developing projects using Flutter, Java, Kotlin, and backend technologies like Node.js and JavaScript, while awaiting thesis defense.',
      logo: '/assets/binus_logo.png'
    },
    {
      school: 'King Abdulaziz University',
      location: 'Saudi Arabia',
      degree: 'Associate Degree in Arabic Language | 2025 – Present',
      description: 'Recipient of a Saudi Government scholarship under the Ma’had Lughoh Program. Attending part-time Arabic language classes (2–4 hours/day) at King Abdulaziz University in Jeddah, Saudi Arabia. Gaining valuable academic and cultural experience in an international setting.',
      logo: '/assets/logo_kau2.png'
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className={styles.headingSm}>Education 📚</span>
          <span className={styles.headingMain}>
            Here you can find information about my educational background.
          </span>
        </h2>

        <div className={styles.content}>
          <div className={styles.grid}>
            {educationList.map((edu, index) => (
              <div key={index} className="card">
                <div className={styles.cardHeader}>
                  <div className={styles.logoCont}>
                    <img src={edu.logo} alt={edu.school} />
                  </div>
                  <div>
                    <h4 className={styles.schoolName}>{edu.school}</h4>
                    <p className={styles.location}>{edu.location}</p>
                    <p className={styles.degree}>{edu.degree}</p>
                  </div>
                </div>
                <p className={styles.description}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
