"use client";

import React from "react";
import styles from "./sideDrawer.module.css";
import SideComponent from "./SideComponent";

const itemsArray = [
  { name: "ideal for", categories: ["men", "women", "baby & kids"] },
  { name: "occasion", categories: ["formal", "casual", "party"] },
  { name: "work", categories: ["office", "outdoor", "home office"] },
  {
    name: "fabric",
    categories: ["cotton", "polyester", "wool", "silk", "linen"],
  },
  { name: "segment", categories: ["luxury", "budget", "mid-range"] },
  { name: "suitable for", categories: ["adults", "teenagers", "elderly"] },
  { name: "raw materials", categories: ["natural", "synthetic", "blend"] },
  { name: "pattern", categories: ["stripes", "floral", "checkered", "solid"] },
];

const SideDrawer = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.filter}>
        <div className={styles.checkBox}>
          <input type="checkbox" id="customizable" />
          <label htmlFor="customizable">Customizable</label>
        </div>
        <div className={styles.SideComponentMain}>
          {itemsArray.map((item) => (
            <SideComponent item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
