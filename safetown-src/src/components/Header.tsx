"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#home" className={styles.logo} onClick={closeDrawer}>
            <Image
              src="/safetown/logo.png"
              alt="Safe Town Electromechanical"
              width={160}
              height={55}
              className={styles.logoImage}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav>
            <ul className={styles.navLinks}>
              <li>
                <a href="#home" className={styles.navLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={styles.navLink}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className={styles.navLink}>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className={styles.navLink}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.navLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburguer Button */}
          <button
            className={styles.mobileToggle}
            onClick={toggleDrawer}
            aria-label="Toggle navigation menu"
            aria-expanded={isDrawerOpen}
          >
            {isDrawerOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerLogo}>
          <Image
            src="/safetown/logo.png"
            alt="Safe Town Electromechanical"
            width={140}
            height={48}
            className={styles.logoImage}
          />
        </div>
        <ul className={styles.drawerLinks}>
          <li>
            <a href="#home" className={styles.drawerLink} onClick={closeDrawer}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.drawerLink} onClick={closeDrawer}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className={styles.drawerLink} onClick={closeDrawer}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.drawerLink} onClick={closeDrawer}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.drawerLink} onClick={closeDrawer}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Drawer Overlay */}
      <div
        className={`${styles.overlay} ${isDrawerOpen ? styles.overlayVisible : ""}`}
        onClick={closeDrawer}
      ></div>
    </>
  );
}
