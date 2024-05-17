"use client";

import React, { useState } from "react";

import FilterSection from "@/components/filterSection/FilterSection";
import Header from "../components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";

import Footer from "@/components/footer/Footer";
import { FilterContext } from "@/store/Index";

const page = () => {
  const [filter, setFilter] = useState(false);
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <Header />
      <HeroSection />
      <FilterSection />
      <Footer />
    </FilterContext.Provider>
  );
};

export default page;
