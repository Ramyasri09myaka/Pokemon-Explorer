import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (name) => {
    setFavorites((prev) => [...prev, name]);
  };

  const removeFavorite = (name) => {
    setFavorites((prev) => prev.filter((fav) => fav !== name));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

