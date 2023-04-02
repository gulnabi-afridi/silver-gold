import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroSectionMain}>
      {/* ====> */}
      <div className={styles.heroSection}>
        <p className={styles.title}>Buy Your gold & silver</p>
        <p className={styles.text}>
          The history of refined metals is thought to begin with the use of
          copper about 11,000 years ago. Gold, silver, iron (as meteoric iron),
          lead, and brass were likewise in use before the first known appearance
          of bronze in the fifth millennium BCE.
        </p>
        <button className={styles.btn}>Buy</button>
      </div>
    </div>
  );
}

export default HeroSection;
