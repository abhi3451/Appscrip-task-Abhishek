"use client";

import React, { useContext, useState } from "react";
import styles from "./filter.module.css";

import ProductList from "../productList/ProductList";
import SvgIcon from "@/svg-icons/SvgIcons";
import { useFilterContext } from "@/store/Index";

const FilterSection = () => {
  const [showRecommended, setShowRecommended] = useState(false);
  const { filter, setFilter } = useFilterContext();

  return (
    <div>
      <div className={styles.filterSection}>
        <div className={styles.filter} id="filter">
          <div className={styles.total_filter}>
            <div className={styles.total}>3425 ITEMS</div>
            {filter ? (
              <div
                className={styles.hideFilter}
                onClick={() => setFilter(!filter)}
              >
                <div className={styles.hideIcon}>
                  <SvgIcon icon="hideArrow" />
                  <div className={styles.hideText}>HIDE FILTERS</div>
                </div>
              </div>
            ) : (
              <div
                className={styles.showFilter}
                onClick={() => setFilter(!filter)}
              >
                <div className={styles.hideIcon}>
                  <SvgIcon icon="showArrow" />
                  <div className={styles.hideText}>SHOW FILTERS</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.filter450} onClick={() => setFilter(!filter)}>
            FILTER
          </div>
          <div className={styles.divide}></div>
          <div
            className={styles.recommended}
            onClick={() => setShowRecommended(!showRecommended)}
          >
            <div className={styles.recommendedText}>Recommended</div>
            {!showRecommended ? (
              <SvgIcon icon="recommendedDown" />
            ) : (
              <SvgIcon icon="recommendedUp" />
            )}
          </div>
        </div>
        {showRecommended && (
          <div className={styles.dropdown} id="dropdown">
            <section className={styles.dropdownHeadingSection}>
              <SvgIcon icon="checkMark" />
              <p className={styles.dropdownHeading}>recommended</p>
            </section>
            <ul className={styles.list}>
              <li className={styles.recList}>Newest first</li>
              <li className={styles.recList}>popular</li>
              <li className={styles.recList}>Price : high to low</li>
              <li className={styles.recList}>Price : low to high</li>
            </ul>
          </div>
        )}
      </div>
      <ProductList />
    </div>
  );
};

export default FilterSection;
