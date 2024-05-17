"use client";

import React from "react";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.navs}>
        <p>HOME</p>
        <p>SHOP</p>
      </div>
      <div className={styles.headline}>
        <h1 className={styles.p1}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.p2}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
