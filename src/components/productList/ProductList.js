"use client";

import React, { useState, useEffect, useContext } from "react";
import styles from "./productList.module.css";
import SideDrawer from "./SideDrawer";
import ProductCard from "./ProductCard";

import axios from "axios";
import { useFilterContext } from "@/store/Index";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { filter, setFilter } = useFilterContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=16`
        );
        if (response?.status == 200) setProducts(response?.data);
      } catch (error) {
        console.log("Error while fetching Product", error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.main}>
      {filter && <SideDrawer className={styles.sideDrawer} />}
      <div className={styles.products}>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
