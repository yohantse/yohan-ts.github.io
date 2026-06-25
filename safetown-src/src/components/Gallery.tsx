import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const photos = [
    { src: "/safetown/show_1.jpg", label: "Electrical Installation" },
    { src: "/safetown/show_2.jpg", label: "Site Work" },
    { src: "/safetown/show_3.jpg", label: "Mechanical Systems" },
    { src: "/safetown/show_4.jpg", label: "Project Delivery" },
    { src: "/safetown/show_5.jpg", label: "Panel Assembly" },
    { src: "/safetown/show_6.jpg", label: "Industrial Build" },
    { src: "/safetown/show_7.jpg", label: "On-site Engineering" },
    { src: "/safetown/sow_8.jpg", label: "Completed Works" },
  ];

  return (
    <section className={styles.gallery}>
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.subtitle}>Our Work</span>
          <h2 className={styles.title}>Project Gallery</h2>
        </div>

        <div className={styles.grid}>
          {photos.map((photo, idx) => (
            <div key={idx} className={styles.item}>
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 992px) 50vw, 25vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
