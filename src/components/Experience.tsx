import React, { useState } from 'react';
import styles from './Experience.module.css';
import { Calendar, Briefcase, Users, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'org'>('work');

  const experiences = [
    {
      company: 'Kementerian Haji & Umrah Indonesia',
      role: 'Seasonal Work - Petugas Haji',
      period: 'May 2026 - June 2026',
      logo: './assets/kemenhaj.png',
      tasks: [
        "Reconciled Indonesian flight manifests and inputted 200,000+ pilgrim records into Saudi's Masar Nusuk system, managing complex groupings and validating contracts to ensure 95% operational readiness.",
        'Conducted on-site supervisory audits of Special Hajj Travel Agencies (PIHK) via a three-way data reconciliation of manifests, agency lists, and visa data for real-time deployment verification.'
      ],
      skills: ['Masar Nusuk System', 'Data Reconciliation', 'Auditing', 'Operations', 'Teamwork']
    },
    {
      company: 'Katsikat Shoes Treatment',
      role: 'Self-employed - Backend Developer',
      period: 'Feb 2025 - Aug 2025',
      logo: './assets/katsikat.png',
      tasks: [
        'Managed the full-cycle cloud deployment of KatsikatRekrutmentApp, including VPS server setup, configuration, and public release, ensuring high system availability and security for the web application.',
        'Architected and developed robust Backend APIs for KatsikatRekrutmentApp using Node.js to power the e-learning and testing modules, which successfully reduced overall recruitment processing time by 80%.'
      ],
      skills: ['Node.js', 'Express.js', 'MySQL', 'REST API', 'VPS Cloud Deployment', 'Backend Architecture']
    },
    {
      company: 'Polytron Indonesia',
      role: 'Intern - Application Developer',
      period: 'Feb 2024 - Feb 2025',
      logo: './assets/polytron_logo.png',
      tasks: [
        'Enhanced user engagement for MyPolytron (Flutter) by developing and optimizing key features for the mobile app (available on Play Store & App Store), resulting in a 55% improvement in app stability and resolving 10+ critical bugs to ensure a seamless user experience.',
        'Optimized Node.js (Express.js) API performance by 87.5% for the MyPolytron app, refactoring core endpoints to reduce response latency from 12 seconds to 1.5 seconds, which significantly enhanced mobile app responsiveness.',
        'Engineered a standalone barcode and QR code scanning module for the Sales App using Kotlin, accelerating the internal inventory tracking process by 40% through high-accuracy scanning algorithms.',
        'Maintained and enhanced internal web platforms using JavaScript (EJS), CodeIgniter, and Bootstrap, thereby modernizing internal legacy systems and improving workflow speeds by 60% for over 90+ active internal users.',
        'Collaborated in a fast-paced environment to deliver features and fixes, streamlining the development lifecycle via Agile (Kanban) to ensure consistent project delivery and effective task management.'
      ],
      skills: ['Flutter', 'Dart', 'Kotlin', 'Java', 'Node.js', 'Express.js', 'JavaScript', 'CodeIgniter', 'EJS', 'Bootstrap', 'REST API', 'Agile (Kanban)']
    }
  ];

  const organizations = [
    {
      name: 'Radio PPI Dunia',
      role: 'Assistant Manager Mobile & Web Div',
      period: 'April 2025 – Juli 2026',
      logo: './assets/radiologo.png',
      darkLogo: true,
      tasks: [
        'Optimized digital platform reliability: Maintaining and developing critical web infrastructure for Radio PPI Dunia, ensuring 99.9% uptime and implementing new features to support global broadcasting.',
        'Lead the development of new Radio PPI Dunia PWA: Acting as the Project Lead for the new Progressive Web App, overseeing the end-to-end development lifecycle to enhance platform accessibility and user retention.',
        'Team Coordination & Management: Co-leading a cross-functional squad of 3 Developers and 2 UI/UX Designers by implementing structured Agile workflows and sprint cycles to ensure synchronized progress and consistent feature delivery.'
      ],
      skills: ['Progressive Web App (PWA)', 'Web Infrastructure', 'Agile Workflows', 'Team Leadership', 'Project Management']
    },
    {
      name: 'Bina Nusantara Computer Club (BNCC)',
      role: 'Learning & Teaching Staff',
      period: 'July 2022 - July 2024',
      logo: './assets/bncc_logo.png',
      tasks: [
        'Mentored students in Mobile Development LnT Class: Facilitated weekly technical workshops for 30+ students, delivering a comprehensive Mobile Development curriculum and ensuring mastery of cross-platform frameworks and UI/UX implementation through hands-on guidance.',
        'Educated aspiring developers on Open Source: Delivered a keynote talk at BNCC Hacktoberfest 2022, guiding 40+ attendees on Git, GitHub, and open-source contributions to foster community collaboration.'
      ],
      skills: ['Time Management', 'Team Work', 'Leadership', 'Mobile Development', 'Mentoring', 'Public Speaking', 'GIT', 'GitHub']
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className={styles.headingSm}>Experience 🎓</span>
          <span className={styles.headingMain}>
            My professional journey across software engineering, cloud architecture, and organizational leadership.
          </span>
        </h2>

        {/* Tab Filter Toggle */}
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'work' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <Briefcase size={18} />
            <span>Work Experience</span>
            <span className={styles.tabBadge}>{experiences.length}</span>
          </button>

          <button
            className={`${styles.tabBtn} ${activeTab === 'org' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('org')}
          >
            <Users size={18} />
            <span>Organization Experience</span>
            <span className={styles.tabBadge}>{organizations.length}</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className={styles.timelineContainer}>
          {activeTab === 'work' && (
            <div className={styles.timeline}>
              {experiences.map((exp: any, index: number) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <div className={styles.timelineDot} />
                    {index !== experiences.length - 1 && <div className={styles.timelineLine} />}
                  </div>

                  <div className={`${styles.experienceCard} glass`}>
                    <div className={styles.cardHeader}>
                      <div className={`${styles.logoCont} ${'darkLogo' in exp && exp.darkLogo ? styles.darkLogoCont : ''}`}>
                        <img src={exp.logo} alt={exp.company} />
                      </div>
                      <div className={styles.headerInfo}>
                        <div className={styles.companyRow}>
                          <h3 className={styles.companyName}>{exp.company}</h3>
                          <span className={styles.periodBadge}>
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                        <p className={styles.roleTitle}>{exp.role}</p>
                      </div>
                    </div>

                    <ul className={styles.taskList}>
                      {exp.tasks.map((task: string, i: number) => (
                        <li key={i} className={styles.taskItem}>
                          <CheckCircle2 size={16} className={styles.taskIcon} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.skillsContainer}>
                      <span className={styles.skillsLabel}>Tech Stack & Skills:</span>
                      <div className={styles.skillBadges}>
                        {exp.skills.map((skill: string, i: number) => (
                          <span key={i} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'org' && (
            <div className={styles.timeline}>
              {organizations.map((org, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <div className={styles.timelineDot} />
                    {index !== organizations.length - 1 && <div className={styles.timelineLine} />}
                  </div>

                  <div className={`${styles.experienceCard} glass`}>
                    <div className={styles.cardHeader}>
                      <div className={`${styles.logoCont} ${org.darkLogo ? styles.darkLogoCont : ''}`}>
                        <img src={org.logo} alt={org.name} />
                      </div>
                      <div className={styles.headerInfo}>
                        <div className={styles.companyRow}>
                          <h3 className={styles.companyName}>{org.name}</h3>
                          <span className={styles.periodBadge}>
                            <Calendar size={14} />
                            {org.period}
                          </span>
                        </div>
                        <p className={styles.roleTitle}>{org.role}</p>
                      </div>
                    </div>

                    <ul className={styles.taskList}>
                      {org.tasks.map((task: string, i: number) => (
                        <li key={i} className={styles.taskItem}>
                          <CheckCircle2 size={16} className={styles.taskIcon} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.skillsContainer}>
                      <span className={styles.skillsLabel}>Competencies & Skills:</span>
                      <div className={styles.skillBadges}>
                        {org.skills.map((skill: string, i: number) => (
                          <span key={i} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
