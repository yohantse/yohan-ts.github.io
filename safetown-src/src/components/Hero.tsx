import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgGlow}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>

      <div className={styles.gridOverlay}></div>

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