"use client";

import React, { useState } from "react";
import styles from "./sideDrawer.module.css";

const SideComponent = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.filterCard}>
      <div>
        <div className={styles.field} onClick={() => setOpen(!open)}>
          <div className={styles.title}>
            <text>{item.name}</text>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#252020"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m18 15l-6-6l-6 6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#252020"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            )}
          </div>
          <div className={styles.subTitle}>All</div>
        </div>
        {open && (
          <div className={styles.explore}>
            <a href="#">Unselect all</a>
            {item.categories.map((category) => (
              <div className={styles.values}>
                <div className={styles.select}>
                  <input type="checkbox" id="options" />
                  <label for="options">{category}</label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideComponent;
