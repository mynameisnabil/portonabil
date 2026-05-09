import React from 'react';
import styles from './Certificates.module.css';
import { Eye } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'AI Praktis untuk Produktivitas by dicoding',
      category: 'Programming Course',
      image: './assets/ss_certif_4.png',
      link: 'https://www.dicoding.com/certificates/JMZVVQ2K3ZN9'
    },
    {
      title: 'Belajar Penggunaan Generative AI by dicoding',
      category: 'Programming Course',
      image: './assets/ss_certif_5.png',
      link: 'https://www.dicoding.com/certificates/JMZVVQ2K3ZN9'
    },
    {
      title: 'Belajar Membuat Aplikasi Android untuk Pemula by dicoding',
      category: 'Programming Course',
      image: './assets/ss-sertif1.png',
      link: 'https://www.dicoding.com/certificates/EYX4RQDJ5XDL'
    },
    {
      title: 'Memulai Pemrograman dengan Java by dicoding',
      category: 'Programming Course',
      image: './assets/ss-sertif2.png',
      link: 'https://www.dicoding.com/certificates/0LZ0GG28RX65'
    },
    {
      title: 'Memulai Pemrograman dengan Dart by dicoding',
      category: 'Programming Course',
      image: './assets/ss-sertif3.png',
      link: 'https://www.dicoding.com/certificates/1OP8126Q1ZQK'
    }
  ];

  return (
    <section id="certif" className={styles.certificates}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className={styles.headingSm}>Certificates 📜</span>
          <span className={styles.headingMain}>
            Here you will find some of the certificates that I have achieved
          </span>
        </h2>

        <div className={styles.content}>
          <div className={styles.grid}>
            {certificates.map((cert, index) => (
              <a key={index} href={cert.link} target="_blank" rel="noreferrer" className={styles.certItem}>
                <div className={styles.certImageCont}>
                  <img src={cert.image} alt={cert.title} className={styles.certImage} />
                  <div className={styles.overlay}>
                    <Eye className={styles.icon} size={32} />
                  </div>
                </div>
                <div className={styles.certDetails}>
                  <p className={styles.certCategory}>{cert.category}</p>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
