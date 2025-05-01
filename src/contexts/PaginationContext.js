import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage, itemsPerPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);

