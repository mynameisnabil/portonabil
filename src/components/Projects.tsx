import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'API Katsikat Recruitment Apps',
      description: 'This API was developed for Rekrutmen Katsikat, a web-based recruitment system designed to solve the inefficient hiring process for Katsikat, a growing small business specializing in shoe care. The system introduces a unique e-learning approach where the company\'s HR team can upload training materials and create evaluation quizzes. This allows them to objectively assess candidates\' skills and ensure they meet company standards before hiring. On this project, I worked as the Backend Developer, responsible for engineering the core RESTful API. I built the API using Node.js and the Express.js framework, with MySQL for the database.',
      image: './assets/Katsikat_Api.png',
      links: [
        { label: 'Code Link', url: 'https://github.com/mynameisnabil/katsikat-api-recruitment', type: 'primary' }
      ],
      reverse: false
    },
    {
      title: 'MyPolytron App',
      description: 'MyPolytron is a mobile app by PT Hartono Istana Teknologi (Polytron) that provides product and service information, including service center locations, FAQs, chat support, and promo updates. The app was developed using Flutter, with the backend API built in Node.js. During my internship as an Application Developer, I worked as a Mobile Developer, redesigning the entire UI, fixing bugs, developing the backend API with Node.js, and releasing the app to the iOS App Store for the first time.',
      image: './assets/mp_gabung.png',
      links: [
        { label: 'AppStore Link', url: 'https://apps.apple.com/us/app/my-polytron/id6670424893', type: 'primary' },
        { label: 'Play Store Link', url: 'https://play.google.com/store/apps/details?id=com.polytron.mypolytron&hl=id', type: 'outline' }
      ],
      reverse: true
    },
    {
      title: 'HobbyHive',
      description: 'Hobby Hive is an Android application that is used to search, rent, rent out, and many others related to sports. This application is built using Java and local data storage, This project is the final project of the Software Engineering class. On this project I worked as App Research, UI Designer, and Apps Developer.',
      image: './assets/hobbyhive.png',
      links: [
        { label: 'Video Demo', url: 'https://youtu.be/aB2II0CmVFM', type: 'primary' },
        { label: 'Code Link', url: 'https://github.com/mynameisnabil/FinproSEV1', type: 'outline' }
      ],
      reverse: false
    },
    {
      title: 'Ruh Arabia App',
      description: 'Ruh Arabia is a mobile application developed during the Innovatech Hackathon 2025 at King Abdulaziz University, Jeddah. The app is designed to help both tourists and locals explore Saudi Arabia’s natural beauty in a more meaningful, interactive, and sustainable way. Built with Flutter, the app allows users to discover ecological trails, learn about local environments, and join conservation efforts such as tree planting. I worked as the Mobile Developer. Our team, Stecu Abis, won 2nd Place in the Tourism Track for this project.',
      image: './assets/ruh_arabia_v2.png',
      links: [
        { label: 'Code Link', url: 'https://github.com/mynameisnabil/hackathon_saudi', type: 'primary' }
      ],
      reverse: true
    },
    {
      title: 'BlazeBuster AR App',
      description: 'BlazeBuster AR is an AR educational application designed to provide interactive education and training on fire fighting techniques using augmented reality technology. It aims to help individuals learn how to extinguish fires accurately and effectively. This application was created using the Unity engine and the C# programming language. This project is the final project of the Wearable Technology class. On this project I worked as App Research, UI Designer, and Apps Developer.',
      image: './assets/BlazeBuster.png',
      links: [
        { label: 'Video Demo', url: 'https://youtu.be/gDlsl0t8bmc', type: 'primary' }
      ],
      reverse: false
    },
    {
      title: 'Bluejack Pharmacy App',
      description: 'Bluejack Pharmacy is an Android application that is used to buy medicines for sale. This application was built using Java and retrieves data using an API. In the authentication process, users are asked to enter an OTP code which is sent to their number. This process uses Firebase. This project is the final assignment of the Mobile Community Solution course. On this project I worked as an Apps Developer.',
      image: './assets/blujack.png',
      links: [
        { label: 'Code Link', url: 'https://github.com/hanzayaim/MCS_LAB_FinalProject', type: 'primary' }
      ],
      reverse: true
    },
    {
      title: 'Landing Page Lecturna',
      description: 'Lecturna Landing Page is a landing page owned by the coding course company Lecturna. On this Landing Page there is information related to the company, a list of available courses, as well as testimonials from students. This project is the final project of the Multimedia Programming Foundation class. On this project I worked as UI Designer and Programmer.',
      image: './assets/lecturna.png',
      links: [
        { label: 'Live Link', url: 'https://molokrakein.github.io/FinproMulmedV2/', type: 'primary' },
        { label: 'Code Link', url: 'https://github.com/MoloKrakein/FinproMulmedV2', type: 'outline' }
      ],
      reverse: false
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className={styles.headingSm}>Projects 🛠️</span>
          <span className={styles.headingMain}>
            Here you will find some of the personal and clients projects that I created with the project details
          </span>
        </h2>

        <div className={styles.content}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectItem} ${project.reverse ? styles.reverse : ''}`}>
              <div className={styles.projectImageCont}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              <div className={styles.projectDetails}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectCount}>
                    <span>{index + 1}</span>
                  </div>
                  <h3 className="heading-tertiary" style={{ marginBottom: 0 }}>{project.title}</h3>
                </div>
                <p className="text-primary">{project.description}</p>
                <div className={styles.projectLinks}>
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`btn ${link.type === 'primary' ? 'btn-primary' : 'btn-outline'}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
