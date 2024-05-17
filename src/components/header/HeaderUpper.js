"use client";

import styles from "./HeaderUpper.module.css";

const HeaderUpper = () => {
  return (
    <div className={styles.upper}>
      <div className={styles.customText}>
        <img
          alt="customText"
          width={16}
          height={16}
          src="/header/element-4.svg"
        />
        <div className={styles.text}>
          <text>Lorem ipsum dolor</text>
        </div>
      </div>
      <div className={styles.customText}>
        <img
          alt="customText"
          width={16}
          height={16}
          src="/header/element-4.svg"
        />
        <div className={styles.text}>
          <text>Lorem ipsum dolor</text>
        </div>
      </div>
      <div className={styles.customText}>
        <img
          alt="customText"
          width={16}
          height={16}
          src="/header/element-4.svg"
        />
        <div className={styles.text}>
          <text>Lorem ipsum dolor</text>
        </div>
      </div>
    </div>
  );
};

export default HeaderUpper;
