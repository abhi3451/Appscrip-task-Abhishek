"use client";

import React, { useState } from "react";
import styles from "./productCard.module.css";
import SvgIcon from "@/svg-icons/SvgIcons";

const ProductCard = ({ product }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className={styles.card}>
      <div className={styles.figure}>
        <img className={styles.image} src={product.image} alt="Main Image" />
      </div>
      <div className={styles.description}>
        <div>
          <div className={styles.text}>{product.title.slice(0, 20)}</div>
          <div className={styles.subLine}>
            <span>Signin</span> <span>or Create an account to see pricing</span>
            {like ? (
              <SvgIcon icon="like" handleLike={handleLike} />
            ) : (
              <SvgIcon icon="undoLike" handleLike={handleLike} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
