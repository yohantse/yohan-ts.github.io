import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgGlow}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>

      <div className={styles.gridOverlay}></div>

<<<<<<< HEAD
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <span className="badge badge-accent">⚡ Standard-Setting Electro-Mechanical Services</span>
          </div>
          <h1 className={styles.title}>
            Safe Town <span className={styles.titleHighlight}>Electromechanical</span>
          </h1>
          <h2 className={styles.subtitle}>
            Delivering Premium Turnkey Installations & Engineering Excellence
          </h2>
          <p className={styles.tagline}>
            Ethiopia's Choice for Compliant, High-Performance Systems
          </p>
          <div className={styles.actions}>
            <a href="#services" className="btn btn-primary">
              Explore Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.collageContainer}>
            <div className={`${styles.collageCard} ${styles.cardBack}`}>
              <Image 
                src="/safetown/show_1.jpg" 
                alt="Electrical panel assembly" 
                width={280} 
                height={210} 
                className={styles.collageImg} 
              />
            </div>
            <div className={`${styles.collageCard} ${styles.cardMiddle}`}>
              <Image 
                src="/safetown/show_5.jpg" 
                alt="Industrial build project" 
                width={280} 
                height={210} 
                className={styles.collageImg} 
              />
            </div>
            <div className={`${styles.collageCard} ${styles.cardFront}`}>
              <Image 
                src="/safetown/show_7.jpg" 
                alt="On-site electrical engineering work" 
                width={360} 
                height={270} 
                className={styles.collageImg} 
                priority
              />
              <div className={styles.floatingBadge}>
                <span className={styles.badgeNumber}>100%</span>
                <span className={styles.badgeLabel}>Quality Audited</span>
              </div>
            </div>
          </div>
=======
      <div className={`container ${styles.container}`}>
        <div className={styles.badgeWrapper}>
          <span className="badge badge-accent">
            ⚡ Commercial & Industrial Electromechanical Contractors
          </span>
        </div>

        <h1 className={styles.title}>
          Engineering Reliable
          <span className={styles.titleHighlight}>
            {" "}Electromechanical Solutions
          </span>
        </h1>

        <h2 className={styles.subtitle}>
          Design, installation, commissioning and maintenance services
          for commercial, industrial and infrastructure projects across Ethiopia.
        </h2>

        <p className={styles.tagline}>
          Trusted Engineering. Reliable Delivery.
        </p>

        <div className={styles.actions}>
          <a href="#services" className="btn btn-primary">
            Explore Services

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <a href="#contact" className="btn btn-secondary">
            Request a Quote
          </a>
>>>>>>> 729e13127de5a47e36ee04767e28d01aec327fc3
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>100+</h3>
            <span>Projects Delivered</span>
          </div>

          <div className={styles.statCard}>
            <h3>10+</h3>
            <span>Years Experience</span>
          </div>

          <div className={styles.statCard}>
            <h3>50+</h3>
            <span>Clients Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}