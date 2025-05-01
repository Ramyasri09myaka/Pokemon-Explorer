import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = 1000; // or however many Pokémon are available

  const setPagination = (page) => {
    setCurrentPage(page);
  };

  const changeItemsPerPage = (num) => {
    setItemsPerPage(num);
  };

  return {
    currentPage,
    itemsPerPage,
    setPagination,
    changeItemsPerPage,
    totalItems,
  };
};

