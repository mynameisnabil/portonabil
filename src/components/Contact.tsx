import React from 'react';
import styles from './Contact.module.css';
import { MapPin, Mail, Phone, Link as LinkIcon } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="heading-secondary">Contact</h2>

        <div className={styles.content}>
          <div className={styles.infoCont}>
            <div className={styles.infoItem}>
              <div className={styles.iconCont}>
                <MapPin size={24} className={styles.icon} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Location :</h4>
                <p className={styles.infoText}>Jeddah, Saudi Arabia | Jakarta, Indonesia</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCont}>
                <Mail size={24} className={styles.icon} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Email :</h4>
                <p className={styles.infoText}>mynameisnabil09@gmail.com</p>
                <p className={styles.infoText}>nabil.izzaturrahman@binus.ac.id</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCont}>
                <Phone size={24} className={styles.icon} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Call :</h4>
                <p className={styles.infoText}>+62895358522968</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconCont}>
                <LinkIcon size={24} className={styles.icon} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Linkedin :</h4>
                <p className={styles.infoText}>www.linkedin.com/in/nabil-izzaturrahman/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
