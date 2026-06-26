import Image from "next/image";
import styles from "./Clients.module.css";

export default function Clients() {
  const clients = [
    { name: "Akwos Construction", src: "/safetown/Client_Logos/Akwos.png" },
    { name: "Belayab Enterprise", src: "/safetown/Client_Logos/Belayab.jpg" },
    { name: "Kality Metal Products", src: "/safetown/Client_Logos/Kality.jpg" },
    { name: "Mesfin Industrial Engineering", src: "/safetown/Client_Logos/Mesfin.png" },
  ];

  return (
    <section className={styles.clientsSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>Trusted by Leading Industrial Partners</h3>
          <div className={styles.grid}>
            {clients.map((client, index) => (
              <div key={index} className={styles.logoCard} title={client.name}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={140}
                    height={50}
                    className={styles.logoImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
