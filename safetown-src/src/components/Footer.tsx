import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Logo / Brand Info */}
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logo}>
              <Image
                src="/safetown/logo.png"
                alt="Safe Town Electromechanical"
                width={180}
                height={62}
                className={styles.logoImage}
              />
            </a>
            <p className={styles.desc}>
              Compliance-oriented, turnkey engineering and electro-mechanical installations for commercial, residential, and industrial facilities in Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#home" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className={styles.link}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>Copyright &copy; {currentYear} Safe Town. All Rights Reserved.</p>
          </div>
          <div className={styles.designed}>
            <p>
              Powered by{" "}
              <a href="https://yohan-ts.com" target="_blank" rel="noopener noreferrer" className={styles.designedLink}>
                Yohannes T.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
