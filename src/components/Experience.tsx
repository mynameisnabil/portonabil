import React from 'react';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Polytron Indonesia',
      role: 'Application Developer Internship',
      period: 'Feb 2024 - Feb 2025',
      logo: '/assets/polytron_logo.png',
      tasks: [
        'Developed and maintained the MyPolytron app using Flutter (Play Store & App Store)',
        'Contributed to MyPolytron API using Node.js and JavaScript',
        'Built a Kotlin-based Android app for barcode and QR code scanning',
        'Improved internal company websites using JavaScript, CodeIgniter, EJS, PHP, and Bootstrap',
        'Worked in an Agile (Kanban) environment for efficient task tracking and collaboration'
      ],
      skills: 'Flutter, Dart, Kotlin, Java, Node.js, JavaScript, PHP, CodeIgniter, EJS, Bootstrap, REST API, GIT, Agile, Kanban'
    },
    {
      company: 'Indi Technology',
      role: 'Android Developer Internship',
      period: 'Jun 2019 - Agustus 2019',
      logo: '/assets/indi_logo_new2.png',
      tasks: [
        'Built New feature on getcrew app',
        'Fixing bug on getcrew app'
      ],
      skills: 'Java, XML, MVP Design Pattern, Android Development, GIT'
    },
    {
      company: 'Asosiasi Cloud Computing indonesia',
      role: 'Android Developer Internship',
      period: 'Sep 2019 - Nov 2019',
      logo: '/assets/acci_logo_new2.png',
      tasks: [
        'Create new build variant',
        'Layouting on ACCI App',
        'Fixing Bug ACCI App'
      ],
      skills: 'Kotlin, Java, XML, MVP Design Pattern, Android Development, GIT'
    }
  ];

  const organizations = [
    {
      name: 'Bina Nusantara Computer Club',
      role1: 'Activis LnT | Des 2021 - Jan 2023',
      role2: 'Staff LnT | Feb 2023 - Present',
      logo: '/assets/bncc_logo.png',
      tasks: [
        'Committee BNCC Launching 2022',
        'Committee BNCC CSR 2022',
        'Speaker BNCC Hacktoberfest 2022',
        'Committe BNCC LnT Class (Front-end LnT \'22/\'23)',
        'Mentor for BNCC Activists at LDP events'
      ],
      skills: 'Time Management, Team Work, Leadership, Android Development, GIT, Front End Development'
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className={styles.headingSm}>Experience 🎓</span>
          <span className={styles.headingMain}>
            Here you can find information about my Internship Experience and Organization Experience.
          </span>
        </h2>

        <div className={styles.content}>
          <h3 className={styles.sectionTitle}>Internship Experience</h3>
          <div className={styles.grid}>
            {experiences.map((exp, index) => (
              <div key={index} className="card">
                <div className={styles.cardHeader}>
                  <div className={styles.logoCont}>
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div>
                    <h4 className={styles.companyName}>{exp.company}</h4>
                    <p className={styles.role}>{exp.role} | {exp.period}</p>
                  </div>
                </div>
                <ul className={styles.taskList}>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <div className={styles.skillsSection}>
                  <p className={styles.skillsTitle}>Skills :</p>
                  <p className={styles.skills}>{exp.skills}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className={styles.sectionTitle} style={{ marginTop: '4rem' }}>Organization Experience</h3>
          <div className={styles.grid}>
            {organizations.map((org, index) => (
              <div key={index} className="card">
                <div className={styles.cardHeader}>
                  <div className={styles.logoCont}>
                    <img src={org.logo} alt={org.name} />
                  </div>
                  <div>
                    <h4 className={styles.companyName}>{org.name}</h4>
                    <p className={styles.role}>{org.role1}</p>
                    <p className={styles.role}>{org.role2}</p>
                  </div>
                </div>
                <ul className={styles.taskList}>
                  {org.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <div className={styles.skillsSection}>
                  <p className={styles.skillsTitle}>Skills :</p>
                  <p className={styles.skills}>{org.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
