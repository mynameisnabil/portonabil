import React from 'react';
import styles from './Education.module.css';
import { Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationList = [
    {
      school: 'King Abdulaziz University',
      location: 'Jeddah, Saudi Arabia',
      degree: 'Associate Degree in Arabic Language',
      period: '2025 – 2026',
      logo: './assets/logo_kau2.png',
      darkLogo: false,
      highlights: [
        'Recipient of Saudi Government Scholarship under the Ma’had Lughoh Program.',
        'Attending intensive Arabic language & literature classes (2–4 hours/day) at KAU in Jeddah.',
        'Gaining valuable academic, cultural, and international experience in Saudi Arabia.'
      ],
      courses: ['Arabic Language', 'Linguistics', 'Arabic Culture', 'Cross-Cultural Communication']
    },
    {
      school: 'Bina Nusantara University',
      location: 'Jakarta, Indonesia',
      degree: 'Bachelor of Computer Science (B.Comp.Sc.)',
      period: 'Sep 2021 – Sep 2025',
      gpa: 'GPA: 3.67 / 4.00',
      logo: './assets/binus_logo.png',
      darkLogo: false,
      highlights: [
        'Specialization in Mobile Applications & Technology with a strong foundation in software engineering.',
        'Thesis Title: "IMPLEMENTATION OF AN RECRUITMENT SYSTEM BASED ON WEB FOR HR PROCESS EFFICIENCY."'
      ],
      courses: [
        'Algorithm & Programming',
        'Data Structures',
        'Object-Oriented Programming (OOP)',
        'Mobile Programming',
        'Web Programming',
        'Artificial Intelligence'
      ]
    },
    {
      school: 'IDN Boarding School',
      location: 'Bogor, Indonesia',
      degree: 'Software Engineering (RPL) Vocational Diploma',
      period: '2018 – 2021',
      logo: './assets/idn_logo.png',
      darkLogo: false,
      highlights: [
        'Studied mobile and web software engineering fundamentals.',
        'Hands-on experience building native Android applications using Java and Kotlin.'
      ],
      courses: ['Android Development', 'Java', 'Kotlin', 'Web Fundamentals', 'Database Systems']
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className={styles.headingSm}>Education 📚</span>
          <span className={styles.headingMain}>
            My academic journey and educational background in computer science and international studies.
          </span>
        </h2>

        <div className={styles.timelineContainer}>
          <div className={styles.timeline}>
            {educationList.map((edu: any, index: number) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineDot} />
                  {index !== educationList.length - 1 && <div className={styles.timelineLine} />}
                </div>

                <div className={`${styles.educationCard} glass`}>
                  <div className={styles.cardHeader}>
                    <div className={`${styles.logoCont} ${edu.darkLogo ? styles.darkLogoCont : ''}`}>
                      <img src={edu.logo} alt={edu.school} />
                    </div>
                    <div className={styles.headerInfo}>
                      <div className={styles.schoolRow}>
                        <h3 className={styles.schoolName}>{edu.school}</h3>
                        <div className={styles.badgeGroup}>
                          {edu.gpa && (
                            <span className={styles.gpaBadge}>
                              <Award size={14} />
                              {edu.gpa}
                            </span>
                          )}
                          <span className={styles.periodBadge}>
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <p className={styles.degreeTitle}>{edu.degree}</p>
                      <p className={styles.locationText}>
                        <MapPin size={13} />
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  <ul className={styles.highlightsList}>
                    {edu.highlights.map((highlight: string, i: number) => (
                      <li key={i} className={styles.highlightItem}>
                        <CheckCircle2 size={16} className={styles.itemIcon} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {edu.courses && edu.courses.length > 0 && (
                    <div className={styles.coursesContainer}>
                      <span className={styles.coursesLabel}>Key Focus & Coursework:</span>
                      <div className={styles.courseBadges}>
                        {edu.courses.map((course: string, i: number) => (
                          <span key={i} className={styles.courseTag}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
