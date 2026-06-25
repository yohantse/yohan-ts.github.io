import styles from "./Services.module.css";

export default function Services() {
  const mechanicalServices = [
    "Heating, ventilating and central air conditioning for commercial and industrial premises",
    "Plumbing (drainage and sanitary works, recycling system, piping system, irrigation)",
    "Fire fighting system",
    "Swimming pools, Fountains, water features, spas and steam systems",
    "Odor control system",
    "Refrigeration system",
    "Stage equipment system",
    "Operation and maintenance for all systems",
    "Pre-engineering building (PEB)",
  ];

  const electricalServices = [
    "Installation of complete electrical system for commercial, industrial and residential complexes",
    "Power distribution construction for rural and urban",
    "High Mast, street, landscape and decorative lighting",
    "Supervisory control and monitoring system",
    "Stand-by power stations (generators and UPS)",
    "Power control (Smart power control and management system)",
    "Solar lighting system",
    "Low Voltage systems (IP TV, fire detection and voice evacuation, security system, parking guidance systems, central clock system, sound system etc ...)",
    "Navigation and visual aids, Meteorological systems, air traffic control systems",
    "Audio-Visual (projection system, display system, classroom teaching system, audio-video distribution and recording system)",
    "Earth networks and lightning protection",
    "Operation and maintenance for all systems",
  ];

  const companyValues = [
    {
      title: "Customer First",
      desc: "Service to the customer above all else is our ultimate priority.",
    },
    {
      title: "Continuous Drive",
      desc: "Never being satisfied; we continuously innovate and improve.",
    },
    {
      title: "Excellence in Reputation",
      desc: "We take immense pride in being part of something special.",
    },
    {
      title: "Creativity & Ability",
      desc: "Encouraging individual capacity and innovative thinking.",
    },
    {
      title: "Pioneering Spirit",
      desc: "Being a pioneer, not following others, and making the impossible happen.",
    },
    {
      title: "Honesty & Integrity",
      desc: "Maintained in every single client and partner relationship.",
    },
  ];

  return (
    <section id="services" className={`section-padding ${styles.services}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerArea}>
          <span className={styles.subtitle}>Our Services</span>
          <h2 className={styles.title}>Electro-Mechanical Excellence</h2>
          <p className={styles.intro}>
            Safe Town Electro-Mechanical Contractor has progressively grown as an industry leader, delivering top-tier turnkey installations in mechanical and electrical projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {/* Mechanical Column */}
          <div className={styles.serviceCol}>
            <div className={styles.colHeader}>
              <div className={styles.iconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3 className={styles.colTitle}>Mechanical Services</h3>
            </div>
            <ul className={styles.list}>
              {mechanicalServices.map((service, index) => (
                <li key={index} className={styles.listItem}>
                  <svg className={styles.listBullet} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Electrical Column */}
          <div className={styles.serviceCol}>
            <div className={styles.colHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconElectrical}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className={styles.colTitle}>Electrical Services</h3>
            </div>
            <ul className={styles.list}>
              {electricalServices.map((service, index) => (
                <li key={index} className={styles.listItem}>
                  <svg className={`${styles.listBullet} ${styles.listBulletElectrical}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Values Panel */}
        <div className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <div className={styles.valuesHeading}>
              <h3>Our Core Values</h3>
              <p>
                The foundation of our company lies in our unwavering commitment to standards, integrity, and safety.
              </p>
            </div>
            <div className={styles.valuesGrid}>
              {companyValues.map((value, idx) => (
                <div key={idx} className={styles.valueItem}>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
