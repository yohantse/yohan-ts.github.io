import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background visual components */}
      <div className={styles.bgGlow}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>
      <div className={styles.gridOverlay}></div>

      <div className={`container ${styles.container}`}>
        <div className={styles.badgeWrapper}>
          <span className="badge badge-accent">⚡ Standard-Setting Electro-Mechanical Services</span>
        </div>
        <h1 className={styles.title}>
          Safe Town <span className={styles.titleHighlight}>Electromechanical</span>
        </h1>
        <h2 className={styles.subtitle}>
          Bringing Excellence and Quality to Services
        </h2>
        <p className={styles.tagline}>
          The Best In The Business
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
    </section>
  );
}
