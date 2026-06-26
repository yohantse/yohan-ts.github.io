import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.bgGlow}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Elevate Your Electromechanical Infrastructure?
          </h2>
          <p className={styles.desc}>
            Partner with Ethiopia's premier contractor. Our expert team is ready to deliver compliant, high-performing, and value-engineered installations.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="#contact" className="btn btn-accent">
            Request a Free Quote
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="tel:+251911166966" className="btn btn-secondary">
            Call Direct Line
          </a>
        </div>
      </div>
    </section>
  );
}
