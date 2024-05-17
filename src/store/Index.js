import { createContext, useContext } from "react";

export const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};
