import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section-padding ${styles.about}`}>
      <div className="container">
        {/* Top Header Section */}
        <div className={styles.headerArea}>
          <span className={styles.subtitle}>About Us</span>
          <h2 className={styles.title}>Welcome to Safe Town Electromechanical</h2>
          <p className={styles.introText}>
            Safe Town Electromechanical delivers world-class electro-mechanical installations and engineering services, committed to standard-setting quality, safety, and client satisfaction.
          </p>
        </div>

        {/* Info Grid */}
        <div className={styles.grid}>
          <div className={styles.descriptionCol}>
            <p>
              Evolving from a consulting firm, we provide expert electrical design and construction for residential, commercial, and industrial sites.
            </p>
            <p>
              Our diverse projects cover commercial complexes, hospitals, street lighting, and grid expansion. All work strictly complies with Ethiopian Electric Agency, EEPCo, and respective international standards.
            </p>
          </div>

          <div className={styles.visualCol}>
            <div className={styles.visualContent}>
              <div className={styles.highlightText}>
                &ldquo;Satisfying customer's needs and requirements is our top measure of successful work.&rdquo;
              </div>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <h4>Compliance</h4>
                  <p>Ethiopian Electric Agency & EEPCo wiring regulations.</p>
                </div>
                <div className={styles.detailItem}>
                  <h4>Standard</h4>
                  <p>Engineered to international safety & quality specifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Quality Grid */}
        <div className={styles.cardsGrid}>
          {/* Vision */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.cardDesc}>
              To drive sustainable industrial development as the preferred electro-mechanical partner, maintaining honesty, fairness, and excellence in every project.
            </p>
          </div>

          {/* Mission */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Mission</h3>
            <p className={styles.cardDesc}>
              To deliver world-class turnkey solutions to clients and stakeholders through value-engineered proposals while adhering to the highest global standards.
            </p>
          </div>

          {/* Quality */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Quality</h3>
            <p className={styles.cardDesc}>
              We exceed technical specifications to ensure maximum system durability and efficiency, refusing shortcuts to guarantee absolute safety and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
