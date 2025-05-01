import React, { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const local = localStorage.getItem('favorites');
    return local ? JSON.parse(local) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  return (
    <PokemonContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
};

