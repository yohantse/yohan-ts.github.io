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
            Safe Town Electromechanical is established with the vision to satisfy the dreams and desires of customers about service needs. We are keenly committed and passionately tuned to proceed on becoming an internationally competent service provider.
          </p>
        </div>

        {/* Info Grid */}
        <div className={styles.grid}>
          <div className={styles.descriptionCol}>
            <p>
              We have progressively evolved as an Electro-Mechanical building installation and consulting firm. We provide services in residential building design and construction of electrical distribution systems, and then gradually grew to industrial electrical services and engineering.
            </p>
            <p>
              Our projects range across commercial complexes, hospital compounds, street lighting, urban power expansion, and rural electrification. All works are conducted in strict accordance with the Electrical Wiring Rules and Regulations of the Ethiopian Electric Agency, the Ethiopian Electric Power Corporation, and respective international standards.
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
              To contribute to the continuous and sustained development in all works, being customer best partner and good global citizen keeping honesty and fairness in every respect, and to lead the way to a bright prosperous future.
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
              We are dedicated to delivery of world class turnkey solutions to our stakeholders in partnership with our clients, consultants and the government. We achieve this through value engineered proposals and adhering to the highest standards.
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
              We are obsessed with quality. We insist not only on meeting technical specifications but exceeding them to ensure the best durability and efficiency possible. There are no shortcuts to absolute excellence in our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
