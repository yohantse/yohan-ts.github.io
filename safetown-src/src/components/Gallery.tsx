import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const projects = [
    {
      src: "/safetown/show_1.jpg",
      title: "Electrical Installation",
      tag: "Electrical",
      desc: "Complete system wiring, main distribution board integration, and complex cable setups."
    },
    {
      src: "/safetown/show_2.jpg",
      title: "Site Infrastructure",
      tag: "Infrastructure",
      desc: "Substation configuration, high-voltage grids, and urban power network expansion."
    },
    {
      src: "/safetown/show_3.jpg",
      title: "Mechanical Systems",
      tag: "Mechanical",
      desc: "Central HVAC, industrial plumbing layouts, and ventilation systems."
    },
    {
      src: "/safetown/show_4.jpg",
      title: "Project Delivery",
      tag: "Turnkey",
      desc: "Final testing, commissioning, and hand-over of fully compliant installations."
    },
    {
      src: "/safetown/show_5.jpg",
      title: "Panel Assembly",
      tag: "Production",
      desc: "Custom smart control panels, breaker boards, and backup switchgear assembly."
    },
    {
      src: "/safetown/show_6.jpg",
      title: "Industrial Build",
      tag: "PEB & Steel",
      desc: "Pre-engineered building erections and comprehensive factory floor piping."
    },
    {
      src: "/safetown/show_7.jpg",
      title: "On-site Engineering",
      tag: "Engineering",
      desc: "Rigorous technical planning and system wiring layout implementation on-site."
    },
    {
      src: "/safetown/sow_8.jpg",
      title: "Completed Works",
      tag: "Delivered",
      desc: "Fully operational, certified facilities with premium safety compliance."
    }
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.subtitle}>Our Portfolio</span>
          <h2 className={styles.title}>Project Showcases</h2>
          <p className={styles.headerDesc}>
            Explore our real-world engineering achievements across residential, commercial, and industrial sites.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 33vw"
                  className={styles.image}
                />
                <span className={styles.cardTag}>{project.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <a href="#contact" className={styles.cardLink}>
                  Inquire Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
